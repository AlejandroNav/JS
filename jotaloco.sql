select materia,industria, count () /(select count () from empresas) as probabilidad 
from empresas where materia in (select distinct materia from empresas)
 and industria in (select distinct industria from empresas)
  group by industria, materia
   order by materia, industria