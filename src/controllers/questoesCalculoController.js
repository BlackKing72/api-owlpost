const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

// url-api/calculo -> busca todos os calculos
// url-api/calculo?id=1 -> busca o calculo com id 1
router.get('/', (req, res) => {
    const { id } = req.query;
    let query = `select * from QuestaoCalculo qc
	    left join QuestaoRegraDeTres qr on qc.id = qr.idQuestao
	    left join QuestaoGotejamento qg on qc.id = qg.idQuestao`;

    if (id) {
        query += ` where qc.id = ?`;
    }

    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Erro ao buscar questões. erro: ${err}`);
            return;
        }

        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { 
        tipo, enunciado, 
        prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade,
        volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade
    } = req.body;

    const queryQuestao = `insert into QuestaoCalculo (enunciado) values (?)`;
    dbConnection.query(queryQuestao, [enunciado], (err, results) => {
        if (err) {
            console.error(`Erro ao criar questão. erro: ${err}`);
            return;
        }

        const idQuestao = results.insertId;

        if (tipo === 0) {
            const queryRegraDeTres = `insert into QuestaoRegraDeTres (idQuestao, prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade) values (?, ?, ?, ?, ?, ?, ?)`;

            dbConnection.query(queryRegraDeTres, [idQuestao, prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade], (err, results) => {
                if (err) {
                    console.error(`Erro ao criar questão de regra de três. erro: ${err}`);
                    return;
                }

                res.json(results);
            });
        }
        else if (tipo === 1) {
            const queryGotejamento = `insert into QuestaoGotejamento (idQuestao, volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade) values (?, ?, ?, ?, ?, ?)`;

            dbConnection.query(queryGotejamento, [idQuestao, volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade], (err, results) => {
                if (err) {
                    console.error(`Erro ao criar questão de gotejamento. erro: ${err}`);
                    return;
                }

                res.json(results);
            });
        }
        else {
            res.json({
                mensagem: `Tipo de questão inválida.`
            })
        }
    });
});

router.patch('/', (req, res) => {
    const { id, tipo, enunciado, 
        prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade,
        volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade
    } = req.body;

    // pode juntar as duas queries e ignorar o tipo, ou deixar do jeito que está.
    // mas separadas não precisa passar os dados para dois tipos de questões.
    if (tipo === 0) {
        const query = `update questaocalculo qc 
            join questaoregradetres qr on qc.id = qr.idQuestao 
            set qc.enunciado = ?, qr.prescricao = ?, qr.prescricaoUnidade = ?, qr.medicacao = ?, qr.medicacaoUnidade = ?, qr.diluente = ?, qr.diluenteUnidade = ?
            where qc.id = ?`;

        dbConnection.query(query, [enunciado, prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade, id], (err, results) => {
            if (err) {
                console.error(`Erro ao atualizar questão de regra de três. erro: ${err}`);
                return;
            }

            res.json(results);
        });
    }
    else if (tipo === 1) {
        const query = `update questaocalculo qc 
            join questaogotejamento qg on qc.id = qg.idQuestao 
            set qc.enunciado = ?, qg.volume = ?, qg.volumeUnidade = ?, qg.tempo = ?, qg.tempoUnidade = ?, qg.destinoUnidade = ?
            where qc.id = ?`;

        dbConnection.query(query, [enunciado, volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade, id], (err, results) => {
            if (err) {
                console.error(`Erro ao atualizar questão de gotejamento. erro: ${err}`);
                return;
            }

            res.json(results);
        });
    }
    else {
        res.json({
            mensagem: `Tipo de questão inválida.`
        })
    }
});

/** url-api/calculo?id=1 */
router.delete('/', (req, res) => {
    const { id } = req.query;
    const query = `delete from QuestaoCalculo where id = ?`;

    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            console.error(`Erro ao deletar questão. erro: ${err}`);
            return;
        }

        res.json(results);
    });
});

module.exports = router;

/*
{
    // Modelo dos dados necessários para criar/atualizar as tabelas
    // das questões.

    // Isso sempre é necessário para todas as questões
    "tipo": 0,                  // 0 - regra de três, 1 - gotejamento
    "enunciado": "testando",    // funciona para todas as questões

    // Se estiver editando alguma questão precisa passar o id
    "id": 1,

    // Só precisa preencher para questões de regra de três.
    "prescricao": 6.6, 
    "prescricaoUnidade": "mg", 
    "medicacao": 6.6, 
    "medicacaoUnidade": "mg", 
    "diluente": 6.6, 
    "diluenteUnidade": "mg",

    // Só precisa preencher para questões de gotejamento.
    "volume": 0.6, 
    "volumeUnidade": "l", 
    "tempo": 6.6, 
    "tempoUnidade": "h", 
    "destinoUnidade": "microgotas",
}
*/