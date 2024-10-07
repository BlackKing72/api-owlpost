use owlpost;

insert into QuestaoCalculo (id, enunciado) values 
(1, 'O médico prescreveu 1,5mg de cloranfenicol. Mas o medicamento que existe na farmácia é de 1ml, contendo 2mg. Como proceder?'),
(2, 'Foi prescrita para uma criança de 13 meses, acometida de pneumonia, a administração de 350 mg de Cefalotina - EV, de 6/6 horas. Na unidade só há frascos do medicamento contendo 1 g e diluentes de 5ml. Quanto irei administrar à criança?'),
(3, 'Para uma solução de 200 ml em 30 minutos, utilizando equipo de microgotas, devem ser infundidas quantas microgotas por minuto?'),
(4, 'Para que 500 ml de soro fisiológico seja administrado em 6 horas, devem ser infundidas quantas gotas por minuto?');

insert into QuestaoRegraDeTres (idQuestao, prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade) values 
(1, 1.5, 'Miligramas', 2, 'Miligramas', 1, 'Mililitros'),
(2, 350, 'Miligramas', 1, 'Gramas', 5, 'Mililitros');

insert into QuestaoGotejamento (idQuestao, volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade) value
(3, 200, 'Mililitros', 30, 'Minutos', 'mgts/min'),
(4, 500, 'Mililitros', 6, 'Horas', 'gts/min');

-- select * from questaocalculo qc
--      left join questaoregradetres qr on qc.id = qr.idQuestao
--      left join questaogotejamento qg on qc.id = qg.idQuestao;


-- insert into QuestaoCalculo (enunciado) values
-- ('test01'),
-- ('test02'),
-- ('test03');


-- insert into questaoregradetres (idQuestao, prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade) values 
-- (1, 1, 'ml', 1, 'ml', 1, 'ml'),
-- (2, 2, 'ml', 2, 'ml', 2, 'ml');
 

-- insert into questaogotejamento (idQuestao, volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade) values
-- (3, 3, 'l', 3, 'h', 'gotas');

-- delete from questaocalculo where id > 2;
-- 


-- select * from questaocalculo q;
-- select * from questaogotejamento q;
-- select * from questaoregradetres q;

-- delete from questaocalculo qc where id = 1;

-- update questaocalculo qc 
-- join questaoregradetres qr on qc.id = qr.idQuestao 
-- set qc.enunciado = 'updates', qr.prescricao = 3, qr.prescricaoUnidade = 'g', qr.medicacao = 3, qr.medicacaoUnidade = 'g', qr.diluente = 3, qr.diluenteUnidade = 'g'
-- where qc.id = 1;

-- update questaocalculo qc 
-- join questaogotejamento qg on qc.id = qg.idQuestao 
-- set qc.enunciado = 'updates', qg.volume = 3, qg.volumeUnidade = 'l', qg.tempo = 3, qg.tempoUnidade = 'min', qg.destinoUnidade = 'microgotas'
-- where qc.id = 3;

-- update questaocalculo qc 
-- left join questaoregradetres qr on qc.id = qr.idQuestao 
-- left join questaogotejamento qg on qc.id = qg.idQuestao 
-- set qc.enunciado = 'updates', 
-- 	qr.prescricao = 3, qr.prescricaoUnidade = 'g', qr.medicacao = 3, qr.medicacaoUnidade = 'g', qr.diluente = 3, qr.diluenteUnidade = 'g',
-- 	qg.volume = 3, qg.volumeUnidade = 'l', qg.tempo = 3, qg.tempoUnidade = 'min', qg.destinoUnidade = 'microgotas'
-- where qc.id = 8;

-- select * from questaocalculo qc
-- 	left join questaoregradetres qr on qc.id = qr.idQuestao
-- 	left join questaogotejamento qg on qc.id = qg.idQuestao;