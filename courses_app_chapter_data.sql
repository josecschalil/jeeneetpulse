--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: courses_app_chapter; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Physical World', 'd6353fba-7060-4784-b752-b20259f31618',  '445d1e1b-9a0d-46b0-a138-ff3bb78372d4');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Units and Measurements', 'd6353fba-7060-4784-b752-b20259f31618',  '346f65b0-6135-4a5d-a249-0a1e611cb89c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Motion in a Straight Line', 'd6353fba-7060-4784-b752-b20259f31618',  '651ecb4a-4d4e-4f13-b814-d614dfe5d100');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Motion in a Plane', 'd6353fba-7060-4784-b752-b20259f31618',  '0c8d10e2-2c42-4169-a218-a5c39384928f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Laws of Motion', 'd6353fba-7060-4784-b752-b20259f31618',  'cd332c04-37a2-411a-b899-a9afa01dfb2c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Work, Energy and Power', 'd6353fba-7060-4784-b752-b20259f31618',  '30de2ff4-b782-4e17-a40e-3094ab9782b5');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('System of Particles and Rotational Motion', 'd6353fba-7060-4784-b752-b20259f31618',  'a36f03af-3228-4d96-abbe-590eaa13394c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Gravitation', 'd6353fba-7060-4784-b752-b20259f31618',  '86ad23aa-e67d-4545-884a-405712e9276d');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Mechanical Properties of Solids', 'd6353fba-7060-4784-b752-b20259f31618',  'a5d92c6e-60ce-47ee-992e-3bbda340ed7a');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Mechanical Properties of Fluids', 'd6353fba-7060-4784-b752-b20259f31618',  'fb82030a-0bf6-4e44-b6dc-ffb7a1b24351');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Thermal Properties of Matter', 'd6353fba-7060-4784-b752-b20259f31618',  '77facca1-dc36-48ac-9a24-992c7c0cd539');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Thermodynamics', 'd6353fba-7060-4784-b752-b20259f31618',  '83117726-8636-4554-adca-48f5c3466033');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Behaviour of Perfect Gas and Kinetic Theory', 'd6353fba-7060-4784-b752-b20259f31618',  '6961dd2a-d6c5-421c-9edd-ef93d5bbf68f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Oscillations and Waves', 'd6353fba-7060-4784-b752-b20259f31618',  '1cfa7b4b-07e3-4da7-998a-21b6224ff7d6');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Electric Charges and Fields', 'd6353fba-7060-4784-b752-b20259f31618',  'b37099d0-7e7b-4496-953b-20b52f2fe693');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Electrostatic Potential and Capacitance', 'd6353fba-7060-4784-b752-b20259f31618',  '2e358ddf-0552-4be9-890f-a10fcc439042');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Current Electricity', 'd6353fba-7060-4784-b752-b20259f31618',  'bb44be83-104f-44f0-8446-c50a50fda487');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Moving Charges and Magnetism', 'd6353fba-7060-4784-b752-b20259f31618',  'd6fbfa9f-987d-406a-b291-45c6cd0e87bc');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Magnetism and Matter', 'd6353fba-7060-4784-b752-b20259f31618',  '0a895870-afc2-49b9-a1c6-55c661b885ee');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Electromagnetic Induction', 'd6353fba-7060-4784-b752-b20259f31618',  '34da5ca4-d12c-4a96-bb17-c2b23f516563');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Alternating Current', 'd6353fba-7060-4784-b752-b20259f31618',  'fe3ee49b-e9fe-4c34-b89a-023e446cfb90');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Electromagnetic Waves', 'd6353fba-7060-4784-b752-b20259f31618',  '21c85287-3322-4cd3-894d-4f597e3c57d6');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Optics', 'd6353fba-7060-4784-b752-b20259f31618',  'b16cdea6-0edd-4dc2-970a-a15f15a40932');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Dual Nature of Matter and Radiation', 'd6353fba-7060-4784-b752-b20259f31618',  '51288e8f-fa55-49d2-9e87-303ebd91004f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Atoms and Nuclei', 'd6353fba-7060-4784-b752-b20259f31618',  '7e80bd7f-c6b6-4485-9802-681332e2fe67');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Electronic Devices', 'd6353fba-7060-4784-b752-b20259f31618',  '882e0b01-ff98-48b7-9ce6-b94c26cf92ee');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Some Basic Concepts of Chemistry', '0e933320-9c99-4ab8-b589-ff14816c4407',  'd38c4c7c-96ba-4f83-b865-ef88129abd5c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Structure of Atom', '0e933320-9c99-4ab8-b589-ff14816c4407',  '4b16de19-13c9-4a0a-b70f-b52361f602ae');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Classification of Elements and Periodicity in Properties', '0e933320-9c99-4ab8-b589-ff14816c4407',  'baa2b797-6e12-4343-9a8b-4c5773fe1946');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Chemical Bonding and Molecular Structure', '0e933320-9c99-4ab8-b589-ff14816c4407',  '90b4990c-6cd8-44c6-9064-a3318cce89ba');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('States of Matter: Gases and Liquids', '0e933320-9c99-4ab8-b589-ff14816c4407',  'c9036622-009e-4a3f-b872-23b4c6fdf99c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Thermodynamics', '0e933320-9c99-4ab8-b589-ff14816c4407',  '8f496938-122f-4e24-9ef7-43bf975dd365');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Equilibrium', '0e933320-9c99-4ab8-b589-ff14816c4407',  '088668b0-2733-4034-9694-ab90381e0e8f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Redox Reactions', '0e933320-9c99-4ab8-b589-ff14816c4407',  '77022eff-fb2f-4e8f-b9ab-d56ef280f595');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Hydrogen', '0e933320-9c99-4ab8-b589-ff14816c4407',  '15933f84-3830-4523-9d70-a5272faa5126');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('s-Block Elements', '0e933320-9c99-4ab8-b589-ff14816c4407',  '1c26c9a7-30ed-4776-a9ce-4c19314720c8');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Some p-Block Elements', '0e933320-9c99-4ab8-b589-ff14816c4407',  '9111a981-9605-4203-9fd6-66638ff3c8a2');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Organic Chemistry - Some Basic Principles and Techniques', '0e933320-9c99-4ab8-b589-ff14816c4407',  'f0f88793-9194-4ec3-8f29-a25845e77390');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Hydrocarbons', '0e933320-9c99-4ab8-b589-ff14816c4407',  '3a43dfa5-c52e-4f47-a372-ff1067e25bc1');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Environmental Chemistry', '0e933320-9c99-4ab8-b589-ff14816c4407',  '885d3481-d1fb-4ce6-8b2a-ddd65f3995af');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Solid State', '0e933320-9c99-4ab8-b589-ff14816c4407',  'b64beae8-086e-46dc-9e2c-9fc736a4231e');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Solutions', '0e933320-9c99-4ab8-b589-ff14816c4407',  '656b2158-8444-40da-9544-76a29d33bf09');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Electrochemistry', '0e933320-9c99-4ab8-b589-ff14816c4407',  'd9eda827-f87f-4bc4-8975-17229a3217c7');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Chemical Kinetics', '0e933320-9c99-4ab8-b589-ff14816c4407',  '63a66726-473b-49ec-930c-f52870a062b5');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Surface Chemistry', '0e933320-9c99-4ab8-b589-ff14816c4407',  '30a15be3-11c9-4792-9b3f-708df094c24d');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('General Principles and Processes of Isolation of Elements', '0e933320-9c99-4ab8-b589-ff14816c4407',  '2afd361c-5f90-4c35-afdd-8d7a3c8017c4');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('p-Block Elements', '0e933320-9c99-4ab8-b589-ff14816c4407',  '0395b05e-b4ce-485f-9821-8d307471128c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('d- and f-Block Elements', '0e933320-9c99-4ab8-b589-ff14816c4407',  'dbbe9b5c-90e1-48eb-84e7-84e7b8c84f31');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Coordination Compounds', '0e933320-9c99-4ab8-b589-ff14816c4407',  '67e43201-335e-4a4f-ac55-e270f9fa5636');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Haloalkanes and Haloarenes', '0e933320-9c99-4ab8-b589-ff14816c4407',  '1a2fc168-9f66-4ed4-8c26-e9b05d088359');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Alcohols, Phenols, and Ethers', '0e933320-9c99-4ab8-b589-ff14816c4407',  '34ffa60d-8a18-4d43-93b1-74ac5a85fbd5');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Aldehydes, Ketones and Carboxylic Acids', '0e933320-9c99-4ab8-b589-ff14816c4407',  '2707cf3f-9500-450f-80c1-ec0af81c66ea');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Organic Compounds Containing Nitrogen', '0e933320-9c99-4ab8-b589-ff14816c4407',  '89f2c2d2-5f0c-4ae0-a195-daaf5d9a44ba');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Biomolecules', '0e933320-9c99-4ab8-b589-ff14816c4407',  '3f2ba898-a61b-4b0e-86c2-0d20b78b7c0a');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Polymers', '0e933320-9c99-4ab8-b589-ff14816c4407',  '18744c6a-30cd-486e-aa2d-b5a890540288');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Chemistry in Everyday Life', '0e933320-9c99-4ab8-b589-ff14816c4407',  '72c27f82-21fa-4303-91e7-0d0525cae19a');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Sets, Relations and Functions', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '09dff73c-9b85-4e30-bf2b-a3ea124902a5');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Complex Numbers and Quadratic Equations', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  'e28e8db0-42b7-49a0-be11-7cbe9e53b2cd');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Matrices and Determinants', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '070e7f8f-a14f-4315-b70b-fe7d6bcfb077');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Permutations and Combinations', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '381450a2-b85e-4271-adb2-3c0163b86aaf');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Binomial Theorem', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '9a6921c4-d6bb-4a3d-a455-e639e04287c9');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Sequences and Series', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  'bdc67030-3276-43e3-9138-0546c8f21654');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Limit, Continuity and Differentiability', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '52d99337-0dbf-4b3e-bddc-4aad4a91e421');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Integral Calculus', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '191725bc-3f4d-4bae-9916-277616abf764');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Differential Equations', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  'bf064de0-98c1-45f8-8502-2bbfc795d712');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Co-ordinate Geometry', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '3e8e7c94-746f-4b60-9266-f0aa0fef7e5f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Three Dimensional Geometry', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  'eef329a4-87fd-4eb1-9888-6b87e12ce0bc');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Vector Algebra', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  'bd168bf7-849d-4fe8-9d14-db396047efa1');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Linear Programming', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '9b906789-9531-404a-8488-de42d08e97d1');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Probability', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  'bd64f280-f591-43fa-bc95-fd96c31991e5');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Relations and Functions', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '4efb769d-216e-4220-a6e9-12e9db22479d');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Statistics', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '48d89af7-0aad-4c90-918a-49c33962ba18');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Trigonometric Functions', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '7e9b9771-29f8-404a-a17e-e6a948d0f32e');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Applications of Integrals', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '7f37cccf-15f1-4aa4-b6b0-6f8afb76316f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Mathematical Induction', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  'b8262f35-feb7-4cdc-88fd-62fe7ebb55ff');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Height and Distance', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '73e4a6ef-950f-4e3b-a73e-18274f30f03a');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Circle', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '3aa828be-2ad7-4c90-b30e-4c46a1c05bff');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Conic Sections', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '91c8a70c-e494-472f-8445-990c6034a24f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Straight Lines', 'c531bbc3-b9d4-490c-ac45-14d711c2fbe0',  '5c5bc6f1-1eb2-48cd-9fec-65e5ffc7a157');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Physical World', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '07561c5e-c146-47a5-aeb1-8e53a4e9889e');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Units and Measurements', '31c49f25-e642-4789-91d5-30b97a98d8e6',  'af444439-97cc-4bba-b574-51ff11dd0c90');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Motion in a Straight Line', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '108c6a95-bc29-439f-96d0-2e94c78ed8cd');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Motion in a Plane', '31c49f25-e642-4789-91d5-30b97a98d8e6',  'c2882d47-362f-4312-9c9d-bbe773593bec');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Laws of Motion', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '8111ac1d-ab8b-411b-80c6-826724faf71c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Work, Energy, and Power', '31c49f25-e642-4789-91d5-30b97a98d8e6',  'f34f17d9-9ee0-46d9-a406-2af6cf7aa609');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('System of Particles and Rotational Motion', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '2ba2afe2-8e63-4240-80e8-f8f9879267b2');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Gravitation', '31c49f25-e642-4789-91d5-30b97a98d8e6',  'f565afa1-2ee5-4027-a32f-7e149bffae1f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Mechanical Properties of Solids', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '8686f5df-0efb-4060-9406-26bcf6a23df4');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Mechanical Properties of Fluids', '31c49f25-e642-4789-91d5-30b97a98d8e6',  'b37698d9-5a18-430c-a65f-5042333d36de');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Thermal Properties of Matter', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '87ba8329-d0c2-4d0e-9bf6-69e9c7db0466');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Thermodynamics', '31c49f25-e642-4789-91d5-30b97a98d8e6',  'c8abb353-ca56-4902-93a1-18c977c2f089');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Kinetic Theory', '31c49f25-e642-4789-91d5-30b97a98d8e6',  'af001613-37b6-4c78-babe-d311a5acc54a');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Oscillations', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '61d5bc26-5805-40cf-807e-0011780f6efa');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Waves', '31c49f25-e642-4789-91d5-30b97a98d8e6',  '5374cf87-7bdd-45d0-94e3-a42c5d8dda3b');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Some Basic Concepts of Chemistry', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '9c03f87f-13f7-4ac9-b5f2-37259d021c0c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Structure of Atom', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '86036bb9-280e-4131-bef6-b4bd178ebb36');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Classification of Elements and Periodicity in Properties', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '1a989476-1723-41cc-afb7-6c0e68a90e7a');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Chemical Bonding and Molecular Structure', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '6e8489cf-9362-46a1-b3fa-551319c04a3c');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('States of Matter: Gases and Liquids', '79687827-cf1a-4457-9daa-b7d4ea500e34',  'a6718e04-ff7b-4596-acac-c6fbd5b22ccb');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Thermodynamics', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '9d9ec119-9b73-455f-aa46-d6c445b21355');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Equilibrium', '79687827-cf1a-4457-9daa-b7d4ea500e34',  'd2854b17-78b8-4275-97e7-b642e02dd20d');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('The s-Block Element (Alkali and Alkaline earth metals)', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '2e7e91c5-3cfd-443b-9abd-b18d1e7b3a69');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('The p-Block Element (Group 13 and Group 14 Elements)', '79687827-cf1a-4457-9daa-b7d4ea500e34',  'e1c95d45-14ed-4ce3-9932-c62e69377368');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Organic Chemistry - Some Basic Principles and Techniques', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '76ba7e64-04fa-4b21-a44f-6409996b937d');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Hydrocarbons', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '216f9969-ed12-4a31-96fc-6b979f1ce294');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Environmental Chemistry', '79687827-cf1a-4457-9daa-b7d4ea500e34',  '3918dbf3-5ac0-41e0-89a8-8a8143fda700');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Diversity of the Living World', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  '076b13aa-438d-47c1-96b7-3228c755bbf4');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Structural Organisation in Animals', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  'a010b690-c2c7-4c63-a12a-23120f88229f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Cell Structure and Function', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  '1ebba226-7131-4e8a-afd6-c1127c21983f');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Plant Physiology', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  '966b5c11-8447-4369-a50d-9f769f7831ac');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Human Physiology', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  'ac724053-2d5d-4f06-a03b-e2f67f412d6a');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Reproduction', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  '1888e554-4be4-46db-bfb5-d4aa826fda1d');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Genetics and Evolution', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  '00852941-e5fe-4f33-bc26-7be7b18d7945');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Biology and Human Welfare', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  'a5c30eb8-0e05-424e-9330-85836e7869b7');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Biotechnology and Its Applications', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  '5791ccf8-2356-4f40-bfb1-04820a4ce6bb');
INSERT INTO public.courses_app_chapter (name, subject_id, id) VALUES ('Ecology and Environment', '851e07b6-3e0c-4836-a034-7c5d49fcc8c6',  '80bb1f16-a9c7-43a3-acf7-2036d2b4c92a');


--
-- PostgreSQL database dump complete
--

