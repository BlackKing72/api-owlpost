use owlpost;

insert into QuestaoCalculo (id, enunciado) values 
(1, 'O médico prescreveu 1,5mg de cloranfenicol. Mas o medicamento que existe na farmácia é de 1ml, contendo 2mg. Como proceder?'),
(2, 'Foi prescrita para uma criança de 13 meses, acometida de pneumonia, a administração de 350 mg de Cefalotina - EV, de 6/6 horas. Na unidade só há frascos do medicamento contendo 1 g e diluentes de 5ml. Quanto irei administrar à criança?'),
(3, 'Para uma solução de 200 ml em 30 minutos, utilizando equipo de microgotas, devem ser infundidas quantas microgotas por minuto?'),
(4, 'Para que 500 ml de soro fisiológico seja administrado em 6 horas, devem ser infundidas quantas gotas por minuto?'),
(5, 'J.C.S. foi internado na clínica médica para tratamento de uma infecção, sendo prescrito amoxicilina 500mg suspensão oral de 8/8 horas. Quantos ml serão administrados, considerando que a apresentação farmacêutica disponível é de 250mg / 5ml?'),
(6, 'Foram prescritos 1800 ml de Soro Fisiológico a 0,9% em 12 horas. Calcule quantas gotas por minuto deverão ser administradas no paciente?'),
(7, 'O médico prescreveu 400 mg de Keflex, suspensão via oral (VO), a cada 8 horas. Na farmácia, está disponível um frasco contendo 250 mg em cada 5 ml de suspensão. Quantos mL da suspensão devem ser administrados?'),
(8, 'O médico prescreveu 250 mg de Cefalexina, suspensão via oral (VO), a cada 8 horas. Na farmácia, está disponível um frasco contendo 250 mg de Cefalexina em cada 5 mL de suspensão. Quantos mL da suspensão devem ser administrados?'),
(9, 'O médico prescreveu 180 mg de Vancomicina, intravenosa (EV), a cada 12 horas. Na farmácia, está disponível um frasco de 500 mg, que deve ser diluído em 5 mL de água destilada (AD). Quantos mL da solução preparada devem ser administrados?'),
(10, 'O médico prescreveu 10 mg de Decadron (Dexametasona), intravenosa (EV), a cada 8 horas. Na farmácia, está disponível uma ampola de 2,5 mL, contendo 4 mg/mL de Decadron. Quantos mL da solução da ampola devem ser administrados?'),
(11, 'O médico prescreveu Metoclopramida (Plasil) 8 mg, intravenosa (IV), a ser administrada junto com 500 mL de soro glicosado (SG) 5%, infundido em 4 horas. Qual será a taxa de gotejamento, em gotas por minuto?'),
(12, 'Um frasco de Mefoxim de 1 g deve ser diluído em 6 mL. O médico prescreveu 200 mg. Quantos mL da solução diluída devem ser administrados?'),
(13, 'Um frasco de Keflex de 500 mg deve ser diluído em 5 mL. O médico prescreveu 350 mg. Quantos mL da solução diluída devem ser administrados?'),
(14, 'O médico prescreveu Fenobarbital 300 mg, via oral (VO), a cada 24 horas. Está disponível uma ampola contendo 200 mg/mL de Fenobarbital. Quantos mL da ampola devem ser administrados?'),
(15, 'O médico prescreveu 60 mg de Ranitidina, via oral (VO), a cada 12 horas. Está disponível um frasco de Label (Ranitidina) com 120 mL, cuja bula indica uma concentração de 150 mg/10 mL.. Quantos mL devem ser administrados?'),
(16, 'O médico prescreveu 450 mg de Clindamicina, intravenosa (EV), a cada 8 horas. Está disponível um frasco ampola de 6 mL, contendo 150 mg/mL de Clindamicina. Quantos mL da solução devem ser administrados?'),
(17, 'O médico prescreveu 400 mg de Dipirona, intravenosa (EV), a ser administrada imediatamente. Está disponível uma ampola de Dipirona contendo 1g / 2mL. Quantos mL da ampola devem ser administrados?'),
(18, 'O médico prescreveu 750 mg de Dipirona, intravenosa (EV), a cada 6 horas. Está disponível uma ampola de Dipirona contendo 1 g/2 mL. Quantos mL da ampola devem ser administrados?'),
(19, 'O médico prescreveu 200 mg de Keflin, intravenosa (EV), a cada 6 horas. Está disponível um frasco ampola de 1 g, que deve ser diluído em 10 mL de água destilada (AD).  Quantos mL devem ser administrados?'),
(20, 'O médico prescreveu 750 mg de Keflin, intravenosa (EV), a cada 6 horas. Está disponível um frasco ampola de 1 g, que deve ser diluído em 10 mL de água destilada (AD).'),
(21, 'O médico prescreveu 500 mL de soro fisiológico a ser administrado em 4 horas. Quantas gotas por minuto devem ser administradas?'),
(22, 'Um paciente precisa receber 1.000 mL de solução glicosada 5% em 8 horas. Qual será a taxa de gotejamento em gotas por hora?'),
(23, 'Um paciente deve receber 1.000 mL de soro fisiológico a ser infundido em 8 horas. Calcule a taxa de infusão em microgotas por minuto.'),
(24, 'Um soro de 500 mL deve ser administrado em 4 horas. Qual será a taxa de infusão em microgotas por minuto?'),
(25, 'Uma solução de 750 mL deve ser infundida em 12 horas. Calcule a taxa de infusão em microgotas por hora.'),
(26, 'Um paciente deve receber 600 mL de soro em 24 horas. Qual será a taxa de gotejamento em microgotas por hora?'),
(27, 'Um soro de 300 mL deve ser infundido em 3 horas. Qual será a taxa de infusão em gotas por minuto?'),
(28, 'Um paciente precisa receber 500 mL de solução salina em 4 horas. Qual será a taxa de gotejamento em gotas por minuto?'),
(29, 'Um soro de 800 mL deve ser infundido em 6 horas. Calcule a taxa de gotejamento em gotas por hora.'),
(30, 'O médico prescreveu 1.500 mL de solução intravenosa para ser administrada em 12 horas. Qual será a taxa de infusão em gotas por hora?');

insert into QuestaoRegraDeTres (idQuestao, prescricao, prescricaoUnidade, medicacao, medicacaoUnidade, diluente, diluenteUnidade) values 
(1, 1.5, 'Miligramas', 2, 'Miligramas', 1, 'Mililitros'),
(2, 350.0, 'Miligramas', 1, 'Gramas', 5, 'Mililitros'),
(5, 500.0, 'Miligramas', 250.0, 'Miligramas', 5.0, 'Mililitros'),
(7, 400.0, 'Miligramas', 250.0, 'Miligramas', 5.0, 'Mililitros'),
(8, 250.0, 'Miligramas', 250.0, 'Miligramas', 5.0, 'Mililitros'),
(9, 180.0, 'Miligramas', 500.0, 'Miligramas', 5.0, 'Mililitros'),
(10, 10.0, 'Miligramas', 10.0, 'Miligramas', 2.5, 'Mililitros'),
(12, 200.0, 'Miligramas', 1.0, 'Gramas', 6.0, 'Mililitros'),
(13, 350.0, 'Miligramas', 500.0, 'Miligramas', 5.0, 'Mililitros'),
(14, 300.0, 'Miligramas', 200.0, 'Miligramas', 1.0, 'Mililitros'),
(15, 60.0, 'Miligramas', 1800.0, 'Miligramas', 120.0, 'Mililitros'),
(16, 450.0, 'Miligramas', 900.0, 'Miligramas', 6.0, 'Mililitros'),
(17, 400.0, 'Miligramas', 1.0, 'Gramas', 2.0, 'Mililitros'),
(18, 750.0, 'Miligramas', 1.0, 'Gramas', 2.0, 'Mililitros'),
(19, 200.0, 'Miligramas', 1.0, 'Gramas', 10.0, 'Mililitros'),
(20, 750.0, 'Miligramas', 1.0, 'Gramas', 10.0, 'Mililitros');

insert into QuestaoGotejamento (idQuestao, volume, volumeUnidade, tempo, tempoUnidade, destinoUnidade) value
(3, 200, 'Mililitros', 30, 'Minutos', 'mgts/min'),
(4, 500, 'Mililitros', 6, 'Horas', 'gts/min'),
(3, 200.0, 'Mililitros', 30.0, 'Minutos', 'mgts/min'),
(4, 500.0, 'Mililitros', 6.0, 'Horas', 'gts/min'),
(6, 1800.0, 'Mililitros', 12.0, 'Horas', 'gts/min'),
(11, 500.0, 'Mililitros', 4.0, 'Horas', 'gts/min'),
(21, 500.0, 'Mililitros', 4.0, 'Horas', 'gts/min'),
(22, 1000.0, 'Mililitros', 8.0, 'Horas', 'gts/hora'),
(23, 1000.0, 'Mililitros', 8.0, 'Horas', 'mgts/min'),
(24, 500.0, 'Mililitros', 4.0, 'Horas', 'mgts/min'),
(25, 750.0, 'Mililitros', 12.0, 'Horas', 'mgts/hora'),
(26, 600.0, 'Mililitros', 24.0, 'Horas', 'mgts/hora'),
(27, 300.0, 'Mililitros', 3.0, 'Horas', 'gts/min'),
(28, 500.0, 'Mililitros', 4.0, 'Horas', 'gts/min'),
(29, 800.0, 'Mililitros', 6.0, 'Horas', 'gts/hora'),
(30, 1500.0, 'Mililitros', 12.0, 'Horas', 'gts/hora');

select * from QuestaoCalculo qc
     left join QuestaoRegraDeTres qr on qc.id = qr.idQuestao
     left join QuestaoGotejamento qg on qc.id = qg.idQuestao;

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