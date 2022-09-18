 INSERT INTO wasd.pais
 (nombre)
VALUES
('Estados Unidos de America'),
('Japon'),
('Corea del Sur'),
('Colombia'),
('Mejico'),
('Argentina'),
('Francia');

INSERT INTO wasd.categoria
(nombre, descripcion)
VALUES 
('Consolas y plataformas', 'En esta categoria encontraras las mejores consolas y maquinas gamer, desde las retro hasta las de ultima generación'),
('Video juegos', 'En esta categoria encontraras los mejores juegos para todas las consolas y plataformas'),
('Accesorios y complementos', 'En esta categoria encontraras accesorios compatibles con tus plataformas que mejoran tu experiencia de juego y uso'),
('Zona Geek', 'Esta es la categoria mas diversa de WASD encontraras desde juguetes hasta ropa de tus personajes y video juegos favoritos' );

INSERT INTO wasd.fabricante
(nombre, descripcion)
VALUES 
('Activision', 'Empresa de videojuegos estadounidense propiedad de Activision Blizzard. Fue el primer desarrollador y distribuidor independiente de este tipo de juegos, fundado el 1 de octubre de 1979 y con sede en Santa Mónica, California.2​ Sus primeros productos fueron cartuchos para la videoconsola Atari 2600; en la actualidad, es la tercera mayor distribuidora de videojuegos, y ha creado diversos títulos, entre ellos Call of Dutyfabricante'),
('Sony', 'Empresa multinacional japonesa con sede en Tokio (Japón) y uno de los fabricantes más importantes a nivel mundial en electrónica de consumo: audio y vídeo, computación, fotografía, videojuegos, telefonía móvil, productos profesionales, etcétera'),
('Microsoft', 'Empresa desarrolla, fabrica, licencia y da soporte a ordenadores personales, servidores, dispositivos electrónicos y servicios. Sus productos más conocidos son el sistema operativo Microsoft Windows, el paquete Microsoft Office, los navegadores de Internet, Internet Explorer y Microsoft Edge. Sus productos estrella son las consolas de videojuegos Xbox y la línea de dispositivos de pantalla táctil Microsoft Surface en hardware'),
('Electronic Arts', 'Sus oficinas centrales están en Redwood City, California. Tiene estudios en varias ciudades de Estados Unidos, en Canadá, Suecia, Corea del Sur, China, Inglaterra y España y otros países. Posee diversas subsidiarias, como EA Sports, encargada de los simuladores deportivos, EA Worldwide para los demás juegos, y subsidiarias adquiridas durante el tiempo como Firemonkeys Studios, BioWare, entre otras'),
('Capcom', 'Empresa japonesa desarrolladora y distribuidora de videojuegos. Fue fundada en 1979 como Japan Capsule Computers, una empresa dedicada a la fabricación y distribución de máquinas de videojuegos. Su actual nombre es el resultado de unir Capsule Computers. En 2016 Capcom Ent., Inc. se mudó a San Francisco'),
('Konami', 'Empresa de desarrollo de juguetes, cartas coleccionables, anime, tokusatsu, máquinas tragaperras y videojuegos. Fue fundada en 1969 como un negocio de reparación y de jukeboxes en Osaka, Japón, por Kagemasa Kozuki, quien es todavía su presidente y director ejecutivo'),
('Nintendo', 'Empresa de entretenimiento dedicada a la investigación, desarrollo y distribución de software y hardware de videojuegos, y juegos de cartas, con sede en Kioto, Japón'),
('Ubisoft', 'Empresa desarrolladora y distribuidora de videojuegos francesa, fundada el 28 de marzo de 1986 en Carentoir, en Bretaña, Francia. Yves Guillemot, uno de los fundadores, es el actual director ejecutivo y presidente de la compañía.3​ Las sedes principales se ubican en Montreuil (Sena-Saint Denis), Francia, y tiene estudios de desarrollo en todo el mundo');

INSERT INTO wasd.producto
(nombre, unidadesDisponibles, modelo, funcionalidades, imagen, precio, peso, calificacion, descripcion, Categoria_id, Fabricante_id, Pais_id)
VALUES
('Call of Duty: Vanguard', 
'5', 
'2021',
 'Juego de acción en primera persona ambientado a la segunda guerra mundial con las mejores imagenes de PS5', 
 '1660177589955-COD_VANGUARD.jpg',
 '50',
 '300',
 '5',
  'Juego de acción en primera persona ambientado a la segunda guerra mundial con las mejores imagenes de PS5',
  '2',
  '1',
  '1'),
  ('Playstation 5', 
'10', 
'2019',
 'El CPU de la PlayStation 5 es un chip AMD personalizado basado en la arquitectura Zen 2. Integra 8 núcleos a una frecuencia de reloj variable de hasta 3,5GHz', 
 '1660179037287-1658190923842-ps5.jpg',
 '500',
 '5000',
 '5',
  'El CPU de la PlayStation 5 es un chip AMD personalizado basado en la arquitectura Zen 2. Integra 8 núcleos a una frecuencia de reloj variable de hasta 3,5GHz.',
  '1',
  '2',
  '2'),
('HD camera PS5', 
'10', 
'2020',
'Con la cámara HD PS5 podrás personalizar el uso compartido de tu juego, gracias a que cuenta con lentes duales para capturar a 1080p y además, posee un soporte integrado, funcionando a la perfección con las herramientas de eliminación de fondos de la consola PlayStation 5. Serás el centro de la atención', 
'1660180108676-1658191448428-cameraHd_PS5.png',
'80',
'500',
'4',
'Con la cámara HD PS5 podrás personalizar el uso compartido de tu juego, gracias a que cuenta con lentes duales para capturar a 1080p y además, posee un soporte integrado, funcionando a la perfección con las herramientas de eliminación de fondos de la consola PlayStation 5. Serás el centro de la atención',
'3',
'2',
'2');

INSERT INTO wasd.productorelacionado
(Producto_padre_id, codigoRelacionado)
VALUES
('1','2'),
('1','3'),
('2','1'),
('2','3'),
('3','1'),
('3', '2');

INSERT INTO wasd.usuario
(nombre, apellido, email, password, avatar, esAdmin)
VALUES
('Alejandro', 'Kepes', 'akepesbu@gmail.com', '$2a$10$8bYxQEL3Te2q/3NadZUcgeujdk6WZXI9aOtcRoA3eK19iB6of.a4u', 'default_avatar.jpg', '1'),
('Juan', 'Garcia', 'jgarcia@gmail.com', '$2a$10$rtLG7vtH8ZQiuVarmbevcumR3wH/WY3GqlylulpmuXVTpI3Zk8dOy', '1661915171242-1658289206059-UNCHARTED LOT PS5.jpg', '1'),
('maria', 'bustamante', 'mariabu@gmail.com', '$2a$10$QRpgWuQK5FKAIoDYXOFzn.vE5oZsEH1leONx4.9pVAYN6w9yEzKXS', '1662938991948-Logo.png', '0');



INSERT INTO wasd.resena
(calificacion, resena, Usuario_id, Producto_id)
VALUES
('2', 'El peor juego, ambientado a la segunda guerra mundial, prefiero jugarlo en PS1 que usar esta version', '2', '1'),
('4', 'El mejor juego, ambientado a la segunda guerra mundial, muy real, saca el mejor provecho de la consola', '1', '1'),
('5', 'La mejor inversion en un juego en primera persona, muy real, apegado a la historia', '3', '1'),
('1', 'Me quedo con todas las versiones de XBOX antes que con un PS5', '2', '2'),
('5', 'Definitivamente es la mejor consola en la historia de los videojuegos', '1', '2'),
('3', 'No veo evolución en las consolas de última generación (PS5, XBOX) sobre sus antecesoras', '3', '2'),
('1', 'No he podido ver la utilidad de esta camara, fue compra compulsiva', '2', '3'),
('2', 'El peor complemento que pudieron inventar, no se que piensan en la SONY sacando estos productos', '1', '3'),
('3', 'Pocos juegos sacan provecho de este producto, ojala sacaran mas titulos', '3', '3');





  
 



