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
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	main_app	customuser
7	main_app	profile
8	authtoken	token
9	authtoken	tokenproxy
10	sites	site
11	courses_app	chapter
12	courses_app	course
13	courses_app	exam
14	courses_app	lecturevideo
15	courses_app	question
16	courses_app	subject
17	courses_app	userexamdata
18	courses_app	examquestion
19	courses_app	chapterquestion
20	courses_app	usercoursedata
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add content type	4	add_contenttype
14	Can change content type	4	change_contenttype
15	Can delete content type	4	delete_contenttype
16	Can view content type	4	view_contenttype
17	Can add session	5	add_session
18	Can change session	5	change_session
19	Can delete session	5	delete_session
20	Can view session	5	view_session
21	Can add custom user	6	add_customuser
22	Can change custom user	6	change_customuser
23	Can delete custom user	6	delete_customuser
24	Can view custom user	6	view_customuser
25	Can add profile	7	add_profile
26	Can change profile	7	change_profile
27	Can delete profile	7	delete_profile
28	Can view profile	7	view_profile
29	Can add Token	8	add_token
30	Can change Token	8	change_token
31	Can delete Token	8	delete_token
32	Can view Token	8	view_token
33	Can add Token	9	add_tokenproxy
34	Can change Token	9	change_tokenproxy
35	Can delete Token	9	delete_tokenproxy
36	Can view Token	9	view_tokenproxy
37	Can add site	10	add_site
38	Can change site	10	change_site
39	Can delete site	10	delete_site
40	Can view site	10	view_site
41	Can add chapter	11	add_chapter
42	Can change chapter	11	change_chapter
43	Can delete chapter	11	delete_chapter
44	Can view chapter	11	view_chapter
45	Can add course	12	add_course
46	Can change course	12	change_course
47	Can delete course	12	delete_course
48	Can view course	12	view_course
49	Can add exam	13	add_exam
50	Can change exam	13	change_exam
51	Can delete exam	13	delete_exam
52	Can view exam	13	view_exam
53	Can add lecture video	14	add_lecturevideo
54	Can change lecture video	14	change_lecturevideo
55	Can delete lecture video	14	delete_lecturevideo
56	Can view lecture video	14	view_lecturevideo
57	Can add question	15	add_question
58	Can change question	15	change_question
59	Can delete question	15	delete_question
60	Can view question	15	view_question
61	Can add subject	16	add_subject
62	Can change subject	16	change_subject
63	Can delete subject	16	delete_subject
64	Can view subject	16	view_subject
65	Can add user exam data	17	add_userexamdata
66	Can change user exam data	17	change_userexamdata
67	Can delete user exam data	17	delete_userexamdata
68	Can view user exam data	17	view_userexamdata
69	Can add exam question	18	add_examquestion
70	Can change exam question	18	change_examquestion
71	Can delete exam question	18	delete_examquestion
72	Can view exam question	18	view_examquestion
73	Can add chapter question	19	add_chapterquestion
74	Can change chapter question	19	change_chapterquestion
75	Can delete chapter question	19	delete_chapterquestion
76	Can view chapter question	19	view_chapterquestion
77	Can add user course data	20	add_usercoursedata
78	Can change user course data	20	change_usercoursedata
79	Can delete user course data	20	delete_usercoursedata
80	Can view user course data	20	view_usercoursedata
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: main_app_customuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_app_customuser (password, last_login, is_superuser, userid, email, name, is_active, is_staff) FROM stdin;
pbkdf2_sha256$870000$zijzSB5rCj1P6EUwTIVXBr$GJmm5dyZhgCLXIRzue/kmtN+Qo/LYLHMGn4UfQl57go=	\N	f	ba205f53-fcac-42ee-af5c-7ab3eb7440ed	richiejames955@gmail.com	Richie	t	f
\.


--
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.authtoken_token (key, created, user_id) FROM stdin;
\.


--
-- Data for Name: courses_app_course; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_course (course_type, title, description, price, current_price, id, portions, watch_hours, classes, chapters, tests, studymaterials, validity, content_left_1, content_left_2, content_left_3, content_left_4, content_right_1, content_right_2, content_right_3, content_right_4, img) FROM stdin;
Online	NEET 2025 Preparation	This course is designed to provide a comprehensive preparation guide for NEET 2025, covering all the topics from Physics, Chemistry, and Biology with mock tests and practice exercises.	180.00	144.00	52b9655f-58ad-4168-8379-3f841e0c6f8d	14	2300	900	50	50	40	365	Introduction to NEET	Physics - Mechanics & Electricity	Chemistry - Organic Chemistry	Biology - Human Physiology	Chemistry - Physical Chemistry	Physics - Optics & Waves	Biology - Genetics & Evolution	Practice Tests & Revision	course_images/1_4_9inji2V.webp
Online	Introduction to Programming	This course covers the basics of programming with Python, including variables, loops, conditionals, and functions.	100.00	90.00	0dcd4192-bbfc-44b6-b85f-51009d8e721d	10	15	120	30	50	30	365	Introduction to Python	Data Types and Variables	Control Structures	Functions and Methods	Python Syntax	Loops and Conditional Statements	Error Handling	Object-Oriented Programming	course_images/1_5_MQNlFNP.webp
Bootcamp	JEE Advanced Preparation	This intensive bootcamp focuses on advanced topics and problem-solving techniques to help students excel in JEE Advanced exams.	300.00	255.00	385f03b3-b9eb-487d-833b-738aae2108d2	10	1300	170	33	50	200	365	Advanced Physics - Electrodynamics	Advanced Mathematics - Vectors & 3D	Chemistry - Inorganic Chemistry	Physics - Modern Physics	Advanced Chemistry - Coordination Compounds	Mathematics - Differential Equations	Mock Tests and Previous Year Papers	Time Management and Strategy Tips	course_images/1_3_7WoizcJ.webp
Online	JEE Mains 2025 Preparation	A complete course to prepare for JEE Mains 2025, covering all the key subjects: Physics, Chemistry, and Mathematics with in-depth explanations and practice tests.	200.00	180.00	c3517806-8095-42c4-9f3f-4e912c630949	12	900	20	30	50	30	122	Introduction to JEE Mains	Physics - Mechanics	Chemistry - Organic Chemistry	Mathematics - Calculus	Mathematics - Algebra	Physics - Thermodynamics	Chemistry - Physical Chemistry	Mock Tests and Practice Papers	course_images/1_2_9oCzoXc.webp
Bootcamp	JEE Advanced Preparation	This intensive bootcamp focuses on advanced topics and problem-solving techniques to help students excel in JEE Advanced exams.	300.00	255.00	32abf448-9d03-42fe-8f80-ea204de3d78a	10	1300	170	33	50	200	365	Advanced Physics - Electrodynamics	Advanced Mathematics - Vectors & 3D	Chemistry - Inorganic Chemistry	Physics - Modern Physics	Advanced Chemistry - Coordination Compounds	Mathematics - Differential Equations	Mock Tests and Previous Year Papers	Time Management and Strategy Tips	course_images/1_4_8Dx2KU5.webp
\.


--
-- Data for Name: courses_app_subject; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_subject (id, name, type, course_id) FROM stdin;
1a7012a4-4e51-4be2-a4fc-94c42ccb0876	Physics	NEET	52b9655f-58ad-4168-8379-3f841e0c6f8d
b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8	Chemistry	NEET	52b9655f-58ad-4168-8379-3f841e0c6f8d
9ba99f67-e02b-4524-a43e-f961ce7a6652	Biology	NEET	52b9655f-58ad-4168-8379-3f841e0c6f8d
\.


--
-- Data for Name: courses_app_chapter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_chapter (id, name, subject_id) FROM stdin;
5a059a81-b56c-40d3-8868-d9755e4b9025	Diversity of the Living World	9ba99f67-e02b-4524-a43e-f961ce7a6652
9fb57dd4-6ae0-476c-bc8e-5d32d2da2760	Structural Organisation in Animals	9ba99f67-e02b-4524-a43e-f961ce7a6652
b6bd3efd-d09d-464a-9e44-1f79cfb94a32	Cell Structure and Function	9ba99f67-e02b-4524-a43e-f961ce7a6652
e1f7a22e-3ee5-4522-98e3-d80018ecaec8	Plant Physiology	9ba99f67-e02b-4524-a43e-f961ce7a6652
be34ac2f-4f70-4fe4-bfbf-7013fdebf932	Human Physiology	9ba99f67-e02b-4524-a43e-f961ce7a6652
41cb32dc-6d08-4a15-a817-28a39dc8d9f2	Reproduction	9ba99f67-e02b-4524-a43e-f961ce7a6652
def514ca-9be6-4276-b4fb-6ca8e9a895e1	Genetics and Evolution	9ba99f67-e02b-4524-a43e-f961ce7a6652
28b49b0b-3a03-4ebf-b5e9-6a08cee20247	Biology and Human Welfare	9ba99f67-e02b-4524-a43e-f961ce7a6652
2c64ff8c-e919-4316-8266-ebd810a1c332	Biotechnology and Its Applications	9ba99f67-e02b-4524-a43e-f961ce7a6652
5cd46164-e625-43cb-aeab-d7f55e37c9e1	Ecology and Environment	9ba99f67-e02b-4524-a43e-f961ce7a6652
bc749d3d-ed31-4d7c-b683-c63993def059	Physical World and Measurement	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
6cc6e5c1-28d6-4970-9044-29c94f09f732	Kinematics	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
e3e60919-2092-4c3a-8877-a6eead15514c	Laws of Motion	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
ce6875f5-034e-4ad4-81b9-fcf79a819451	Work, Energy, and Power	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
6e412ca2-9f79-4217-9d3a-ab96ad7a04c2	Motion of System of Particles and Rigid Body	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
d0fa8fa2-3a32-412c-afee-d1b418c2305b	Gravitation	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
49fe8822-4ee2-4357-8b25-2f887441d687	Properties of Bulk Matter	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
0d587a4b-4431-4cb5-a0e4-df45ce7cd3a9	Thermodynamics	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
9243c795-3860-451b-8a62-48dc3f399598	Behaviour of Perfect Gas and Kinetic Theory	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
c90c3bb8-0c8d-44b5-bb50-b2fc51cd58c6	Oscillations and Waves	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
cefb3347-5169-4e68-8390-2f513d1ca99a	Some Basic Concepts of Chemistry	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
d15c9d6a-aa99-4454-921f-b65decd508e8	Structure of Atom	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
4b219553-6c44-4fe6-9f77-d185074567a9	Classification of Elements and Periodicity in Properties	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
462f7b8f-7520-4f06-935d-8932378e9da3	Chemical Bonding and Molecular Structure	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
4d637d09-a89a-452d-82c3-f008084fb7c3	States of Matter: Gases and Liquids	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
37a5c03a-0f65-4d07-b0e3-2c97eeb57abf	Thermodynamics	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
e38aad1d-5113-407b-8cc7-29b182a71ccc	Equilibrium	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
7ed52769-ed48-430e-91eb-45100dd7380a	Redox Reactions	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
f63b708e-8d2f-4682-a502-a03d657b8979	Hydrogen	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
fc3cf0b6-e95a-4484-baad-e786e4e7cdd8	s-Block Elements (Alkali and Alkaline earth metals)	b1bb3b6d-a2ff-47c9-8ab3-16e0108f07e8
f59de28b-068d-41c0-93ca-aa0e0f9981a3	CHumma DEMo	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
717c636b-5fc2-47db-89fb-e9a0a796a0a2	CHumma DEMo	1a7012a4-4e51-4be2-a4fc-94c42ccb0876
\.


--
-- Data for Name: courses_app_question; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_question (id, question_text, question_image, option_a_text, option_a_image, option_b_text, option_b_image, option_c_text, option_c_image, option_d_text, option_d_image, correct_answer, concept_involved, solution_text, diagram_image, level, option_a_text_hindi, option_b_text_hindi, option_c_text_hindi, option_d_text_hindi, question_text_hindi, solution_text_hindi) FROM stdin;
d1e14950-5986-45dc-92e7-804f3233c324	What is the chemical formula for water?		H2O		H2O2		CO2		O2		A	Chemical Bonding	Water (H2O) is a compound made of two hydrogen atoms bonded to one oxygen atom.		1	\N	\N	\N	\N	\N	\N
771cb4ac-4e1b-4b66-a6b7-11b2c2e0b65f	What is the atomic number of Carbon?		6		12		8		4		A	Atomic Structure	The atomic number of Carbon is 6.		1	\N	\N	\N	\N	\N	\N
bb286a6f-191a-424d-8339-2eea32aa8e41	Which of the following is the smallest particle of an element?		Atom		Molecule		Ion		Electron		A	Atomic Structure	The smallest particle of an element is an atom.		1	\N	\N	\N	\N	\N	\N
c4a2a3c5-88f1-4e70-a4ad-8a36b289930e	What is the most abundant gas in the Earth's atmosphere?		Nitrogen		Oxygen		Carbon Dioxide		Argon		A	Atmospheric Chemistry	Nitrogen makes up about 78% of the Earth's atmosphere.		1	\N	\N	\N	\N	\N	\N
e7019dc1-0f82-4d1c-810f-6c3de858fe8d	Which of the following elements is a halogen?		Fluorine		Oxygen		Calcium		Neon		A	Periodic Table	Fluorine is a halogen, found in group 17 of the periodic table.		1	\N	\N	\N	\N	\N	\N
182e6055-762d-4be7-aa87-6bfce8893ab0	What is the charge of an electron?		-1		+1		0		-2		A	Atomic Structure	An electron carries a negative charge of -1.		1	\N	\N	\N	\N	\N	\N
46549279-4d2d-4c38-ac97-d55bb18cc2b9	What is the boiling point of water?		100°C		0°C		50°C		150°C		A	Thermodynamics	The boiling point of water is 100°C at 1 atmosphere of pressure.		1	\N	\N	\N	\N	\N	\N
e37d7d45-6782-4765-8777-1e408152c003	What is the formula for speed?		Distance / Time		Time / Distance		Distance * Time		Time * Speed		A	Speed and Velocity	Speed is calculated by dividing the distance traveled by the time taken.		1	\N	\N	\N	\N	\N	\N
dc30f11b-5abe-4d0f-96fb-7190e5100ecb	What does uniform motion mean?		Motion with constant speed		Motion with increasing speed		Motion with changing direction		Motion with zero velocity		A	Types of Motion	Uniform motion refers to motion with constant speed in a straight line.		1	\N	\N	\N	\N	\N	\N
b927894a-63f8-4844-930d-f401ae35d6f5	If an object starts from rest and accelerates uniformly, what is the formula for its final velocity?		v = u + at		v = u - at		v = u + at^2		v = u * at		A	Equations of Motion	The formula for final velocity in uniformly accelerated motion is v = u + at, where u is the initial velocity, a is the acceleration, and t is the time.		1	\N	\N	\N	\N	\N	\N
f7547e85-6f03-4c96-89fd-a1d10cf85fc2	What is the atomic number of an element?		The number of protons in an atom		The number of neutrons in an atom		The number of electrons in an atom		The sum of protons and neutrons		A	Atomic Structure	The atomic number of an element is the number of protons in the nucleus of an atom.		1	\N	\N	\N	\N	\N	\N
07525c33-ba00-4710-97a5-3e54ddf597b2	What is the name of the molecule H2O?		Water		Hydrogen Peroxide		Hydrogen		Oxygen		A	Chemical Compounds	H2O is the chemical formula for water.		1	\N	\N	\N	\N	\N	\N
5fafe56b-3502-45ac-b326-0c606f91638e	Which of the following is a physical change?		Melting of ice		Rusting of iron		Burning of wood		Digestion of food		A	Physical and Chemical Changes	Melting of ice is a physical change because it only alters the state of water without changing its chemical composition.		1	\N	\N	\N	\N	\N	\N
5a6e1fd4-5cd7-4fa3-a5c4-9d9afcd9c964	What is the pH of pure water?		7		0		14		5		A	Acids, Bases, and pH	The pH of pure water is 7, which is considered neutral.		1	\N	\N	\N	\N	\N	\N
c2f821bb-8025-4a10-8388-793869855aa6	Which of the following elements is a noble gas?		Helium		Oxygen		Nitrogen		Chlorine		A	Periodic Table	Helium is a noble gas, which is chemically inert and found in group 18 of the periodic table.		1	\N	\N	\N	\N	\N	\N
056209dd-8dbb-49aa-ac31-fff63a63c418	In a simple harmonic motion (SHM), a particle moves with an amplitude $A$ and period $T$. The velocity of the particle at any time $t$ is given by: $v(t) = A\\\\omega \\\\cos(\\\\omega t)$ where $\\\\omega = \\\\frac{2\\\\pi}{T}$. At time $t = \\\\frac{T}{4}$, what is the speed of the particle?		$\\\\frac{A}{2}$		$\\\\frac{A}{2}$		$\\\\frac{A\\\\pi}{T}$		$\\\\frac{A}{4}$		A	Uniform Motion	We start with the given velocity function $ v(t) = A \\\\omega \\\\cos(\\\\omega t) $, where $ \\\\omega = \\\\frac{2\\\\pi}{T} $. Substituting $ t = \\\\frac{T}{4} $ into the equation, we get: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = A \\\\omega \\\\cos\\\\left( \\\\omega \\\\cdot \\\\frac{T}{4} \\\\right) \\\\] Substituting $ \\\\omega = \\\\frac{2\\\\pi}{T} $ gives: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = A \\\\cdot \\\\frac{2\\\\pi}{T} \\\\cdot \\\\cos\\\\left( \\\\frac{2\\\\pi}{T} \\\\cdot \\\\frac{T}{4} \\\\right) \\\\] Simplifying the argument of the cosine: \\\\[ \\\\frac{2\\\\pi}{T} \\\\cdot \\\\frac{T}{4} = \\\\frac{\\\\pi}{2} \\\\] Thus, the equation becomes: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = A \\\\cdot \\\\frac{2\\\\pi}{T} \\\\cdot \\\\cos\\\\left( \\\\frac{\\\\pi}{2} \\\\right) \\\\] Since $ \\\\cos\\\\left( \\\\frac{\\\\pi}{2} \\\\right) = 0 $, the velocity at $ t = \\\\frac{T}{4} $ is: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = 0 \\\\] Therefore, the speed of the particle at $ t = \\\\frac{T}{4} $ is $ 0 $. The correct answer is $ \\\\text{(a)} \\, v = 0 $.		1	$\\\\frac{A}{2}$	$\\\\frac{A}{2}$	$\\\\frac{A}{2}$	$\\\\frac{A}{2}$	साधारण हार्मोनिक गति (SHM) में, एक कण एक आयाम $A$ और अवधि $T$ के साथ गति करता है। कण की गति किसी भी समय $t$ पर इस प्रकार दी जाती है: $v(t) = A\\\\omega \\\\cos(\\\\omega t)$ जहाँ $\\\\omega = \\\\frac{2\\\\pi}{T}$। समय $t = \\\\frac{T}{4}$ पर, कण की गति क्या होगी?	हम दिए गए वेग समीकरण $ v(t) = A \\\\omega \\\\cos(\\\\omega t) $ से शुरू करते हैं, जहाँ $ \\\\omega = \\\\frac{2\\\\pi}{T} $। $ t = \\\\frac{T}{4} $ को समीकरण में स्थानापन्न करते हैं: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = A \\\\omega \\\\cos\\\\left( \\\\omega \\\\cdot \\\\frac{T}{4} \\\\right) \\\\] $ \\\\omega = \\\\frac{2\\\\pi}{T} $ को स्थानापन्न करते हैं: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = A \\\\cdot \\\\frac{2\\\\pi}{T} \\\\cdot \\\\cos\\\\left( \\\\frac{2\\\\pi}{T} \\\\cdot \\\\frac{T}{4} \\\\right) \\\\] कॉसाइन के तर्क को सरल करते हैं: \\\\[ \\\\frac{2\\\\pi}{T} \\\\cdot \\\\frac{T}{4} = \\\\frac{\\\\pi}{2} \\\\] अत: समीकरण हो जाता है: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = A \\\\cdot \\\\frac{2\\\\pi}{T} \\\\cdot \\\\cos\\\\left( \\\\frac{\\\\pi}{2} \\\\right) \\\\] चूँकि $ \\\\cos\\\\left( \\\\frac{\\\\pi}{2} \\\\right) = 0 $, $ t = \\\\frac{T}{4} $ पर गति होगी: \\\\[ v\\\\left(\\\\frac{T}{4}\\\\right) = 0 \\\\] इसलिए, $ t = \\\\frac{T}{4} $ पर कण की गति $ 0 $ होगी। सही उत्तर है $ \\\\text{(a)} \\, v = 0 $।
29bb68f9-1782-4fd8-a8d2-b00753d24fe2	In a simple harmonic motion (SHM), a particle moves with an amplitude $A$ and period $T$. The velocity of the particle at any time $t$ is given by: $v(t) = A\\omega \\cos(\\omega t)$ where $\\omega = \\frac{2\\pi}{T}$. At time $t = \\frac{T}{4}$, what is the speed of the particle?	question_images/image6_JSuW79L.png	$ v = 0 $		$ v = A\\omega $		$ v = A\\frac{2\\pi}{T} $		$ v = A $		A	Simple Harmonic Motion	We start with the equation $ v(t) = A\\omega \\cos(\\omega t) $, where $ \\omega = \\frac{2\\pi}{T} $. Substituting $ t = \\frac{T}{4} $: \\\\[ v\\left(\\frac{T}{4}\\right) = A\\omega \\cos\\left( \\frac{2\\pi}{T} \\cdot \\frac{T}{4} \\right) \\\\] \\\\[ v\\left(\\frac{T}{4}\\right) = A\\omega \\cos\\left( \\frac{\\pi}{2} \\right) \\\\] Since $ \\cos\\left( \\frac{\\pi}{2} \\right) = 0 $, the speed of the particle is $ v = 0 $. Thus, the correct answer is $ \\text{(a)} \\, v = 0 $.		1	$ v = 0 $ (कण की गति शून्य है)	$ v = A\\omega $ (कण की गति $A\\omega$ के बराबर है)	$ v = A\\frac{2\\pi}{T} $ (कण की गति $A\\frac{2\\pi}{T}$ के बराबर है)	$ v = A $ (कण की गति $A$ के बराबर है)	साधारण हार्मोनिक गति (SHM) में, एक कण एक आयाम $A$ और अवधि $T$ के साथ गति करता है। कण की गति किसी भी समय $t$ पर इस प्रकार दी जाती है: $v(t) = A\\omega \\cos(\\omega t)$ जहाँ $\\omega = \\frac{2\\pi}{T}$। समय $t = \\frac{T}{4}$ पर, कण की गति क्या होगी?	हम समीकरण $ v(t) = A\\omega \\cos(\\omega t) $ से शुरू करते हैं, जहाँ $ \\omega = \\frac{2\\pi}{T} $। $ t = \\frac{T}{4} $ को समीकरण में स्थानापन्न करते हैं: \\\\[ v\\left(\\frac{T}{4}\\right) = A\\omega \\cos\\left( \\frac{2\\pi}{T} \\cdot \\frac{T}{4} \\right) \\\\] \\\\[ v\\left(\\frac{T}{4}\\right) = A\\omega \\cos\\left( \\frac{\\pi}{2} \\right) \\\\] चूँकि $ \\cos\\left( \\frac{\\pi}{2} \\right) = 0 $, कण की गति $ v = 0 $ होगी। अतः सही उत्तर है $ \\text{(a)} \\, v = 0 $.
feee872b-fdd4-42d8-b1b5-d01d948d025b	Consider a block connected by two spring balances $S_1$ and $S_2$ as shown in the figure. The lift is accelerating upwards with acceleration $a = 10 \\text{ m/s}^2$. The reading of $S_1$ is $90 \\text{ kg}$ and for $S_2$ is $30 \\text{ kg}$. The mass is stationary with respect to the lift. Then the value of mass $m$ of the block is:	question_images/Screenshot_2025-01-23_180945.png	$60 \\text{ kg}$		$30 \\text{ kg}$		$120 \\text{ kg}$		None of these		B	Newton's Second Law of Motion	We apply Newton's second law: $T_1 - T_2 - mg = ma$. Substituting the values: \\\\ $900 - 300 = m(10 + 10)$, solving we get $m = 30 \\text{ kg}$.		1	$60 \\text{ kg}$	$30 \\text{ kg}$	$120 \\text{ kg}$	इनमें से कोई नहीं	चित्र में दर्शाए गए दो स्प्रिंग बैलेंस $S_1$ और $S_2$ से जुड़े एक ब्लॉक पर विचार करें। लिफ्ट $a = 10 \\text{ m/s}^2$ त्वरण के साथ ऊपर की ओर गति कर रही है। $S_1$ का पठन $90 \\text{ kg}$ और $S_2$ का पठन $30 \\text{ kg}$ है। द्रव्यमान लिफ्ट के सापेक्ष स्थिर है। तब ब्लॉक के द्रव्यमान $m$ का मान क्या है:	हम न्यूटन के द्वितीय नियम को लागू करते हैं: $T_1 - T_2 - mg = ma$। दिए गए मानों को प्रतिस्थापित करते हुए: \\\\ $900 - 300 = m(10 + 10)$, हल करने पर हमें प्राप्त होता है $m = 30 \\text{ kg}$।
ce34d248-054c-4188-8a1a-24f4ddb2c552	Consider a block connected by two spring balances $S_1$ and $S_2$ as shown in the figure. The lift is accelerating upwards with acceleration $a = 10 \\text{ m/s}^2$. The reading of $S_1$ is $90 \\text{ kg}$ and for $S_2$ is $30 \\text{ kg}$. The mass is stationary with respect to the lift. Then the value of mass $m$ of the block is:	question_images/Screenshot_2025-01-23_180945_l25DdDR.png	$60 \\text{ kg}$		$30 \\text{ kg}$		$120 \\text{ kg}$		None of these		B	Newton's Second Law of Motion	We apply Newton's second law: $T_1 - T_2 - mg = ma$. Substituting the values: \\\\ $900 - 300 = m(10 + 10)$, solving we get $m = 30 \\text{ kg}$.		1	$60 \\text{ kg}$	$30 \\text{ kg}$	$120 \\text{ kg}$	इनमें से कोई नहीं	चित्र में दर्शाए गए दो स्प्रिंग बैलेंस $S_1$ और $S_2$ से जुड़े एक ब्लॉक पर विचार करें। लिफ्ट $a = 10 \\text{ m/s}^2$ त्वरण के साथ ऊपर की ओर गति कर रही है। $S_1$ का पठन $90 \\text{ kg}$ और $S_2$ का पठन $30 \\text{ kg}$ है। द्रव्यमान लिफ्ट के सापेक्ष स्थिर है। तब ब्लॉक के द्रव्यमान $m$ का मान क्या है:	हम न्यूटन के द्वितीय नियम को लागू करते हैं: $T_1 - T_2 - mg = ma$। दिए गए मानों को प्रतिस्थापित करते हुए: \\\\ $900 - 300 = m(10 + 10)$, हल करने पर हमें प्राप्त होता है $m = 30 \\text{ kg}$।
1fba7e46-992b-443c-9fb3-0fbcccf4de91	Consider a block connected by two spring balances $S_1$ and $S_2$ as shown in the figure. The lift is accelerating upwards with acceleration $a = 10 \\text{ m/s}^2$. The reading of $S_1$ is $90 \\text{ kg}$ and for $S_2$ is $30 \\text{ kg}$. The mass is stationary with respect to the lift. Then the value of mass $m$ of the block is:	question_images/basis_for_transitive_closure..png	$60 \\text{ kg}$		$30 \\text{ kg}$		$120 \\text{ kg}$		None of these		B	Newton's Second Law of Motion	We apply Newton's second law: $T_1 - T_2 - mg = ma$. Substituting the values: \\\\ $900 - 300 = m(10 + 10)$, solving we get $m = 30 \\text{ kg}$.		1	$60 \\text{ kg}$	$30 \\text{ kg}$	$120 \\text{ kg}$	इनमें से कोई नहीं	चित्र में दर्शाए गए दो स्प्रिंग बैलेंस $S_1$ और $S_2$ से जुड़े एक ब्लॉक पर विचार करें। लिफ्ट $a = 10 \\text{ m/s}^2$ त्वरण के साथ ऊपर की ओर गति कर रही है। $S_1$ का पठन $90 \\text{ kg}$ और $S_2$ का पठन $30 \\text{ kg}$ है। द्रव्यमान लिफ्ट के सापेक्ष स्थिर है। तब ब्लॉक के द्रव्यमान $m$ का मान क्या है:	हम न्यूटन के द्वितीय नियम को लागू करते हैं: $T_1 - T_2 - mg = ma$। दिए गए मानों को प्रतिस्थापित करते हुए: \\\\ $900 - 300 = m(10 + 10)$, हल करने पर हमें प्राप्त होता है $m = 30 \\text{ kg}$।
eaf632f3-912a-4129-adae-304c69a7e99d	Consider a block connected by two spring balances $S_1$ and $S_2$ as shown in the figure. The lift is accelerating upwards with acceleration $a = 10 \\text{ m/s}^2$. The reading of $S_1$ is $90 \\text{ kg}$ and for $S_2$ is $30 \\text{ kg}$. The mass is stationary with respect to the lift. Then the value of mass $m$ of the block is:	question_images/1_2.webp	$60 \\text{ kg}$		$30 \\text{ kg}$		$120 \\text{ kg}$		None of these		B	Newton's Second Law of Motion	We apply Newton's second law: $T_1 - T_2 - mg = ma$. Substituting the values: \\\\ $900 - 300 = m(10 + 10)$, solving we get $m = 30 \\text{ kg}$.		1	$60 \\text{ kg}$	$30 \\text{ kg}$	$120 \\text{ kg}$	इनमें से कोई नहीं	चित्र में दर्शाए गए दो स्प्रिंग बैलेंस $S_1$ और $S_2$ से जुड़े एक ब्लॉक पर विचार करें। लिफ्ट $a = 10 \\text{ m/s}^2$ त्वरण के साथ ऊपर की ओर गति कर रही है। $S_1$ का पठन $90 \\text{ kg}$ और $S_2$ का पठन $30 \\text{ kg}$ है। द्रव्यमान लिफ्ट के सापेक्ष स्थिर है। तब ब्लॉक के द्रव्यमान $m$ का मान क्या है:	हम न्यूटन के द्वितीय नियम को लागू करते हैं: $T_1 - T_2 - mg = ma$। दिए गए मानों को प्रतिस्थापित करते हुए: \\\\ $900 - 300 = m(10 + 10)$, हल करने पर हमें प्राप्त होता है $m = 30 \\text{ kg}$।
62b7f1a3-9744-4ce0-979f-82ba4031abe4	Consider a block connected by two spring balances $S_1$ and $S_2$ as shown in the figure. The lift is accelerating upwards with acceleration $a = 10 \\text{ m/s}^2$. The reading of $S_1$ is $90 \\text{ kg}$ and for $S_2$ is $30 \\text{ kg}$. The mass is stationary with respect to the lift. Then the value of mass $m$ of the block is:	question_images/1_2_9OTTcPs.webp	$60 \\text{ kg}$		$30 \\text{ kg}$		$120 \\text{ kg}$		None of these		B	Newton's Second Law of Motion	We apply Newton's second law: $T_1 - T_2 - mg = ma$. Substituting the values: \\\\ $900 - 300 = m(10 + 10)$, solving we get $m = 30 \\text{ kg}$.		1	$60 \\text{ kg}$	$30 \\text{ kg}$	$120 \\text{ kg}$	इनमें से कोई नहीं	चित्र में दर्शाए गए दो स्प्रिंग बैलेंस $S_1$ और $S_2$ से जुड़े एक ब्लॉक पर विचार करें। लिफ्ट $a = 10 \\text{ m/s}^2$ त्वरण के साथ ऊपर की ओर गति कर रही है। $S_1$ का पठन $90 \\text{ kg}$ और $S_2$ का पठन $30 \\text{ kg}$ है। द्रव्यमान लिफ्ट के सापेक्ष स्थिर है। तब ब्लॉक के द्रव्यमान $m$ का मान क्या है:	हम न्यूटन के द्वितीय नियम को लागू करते हैं: $T_1 - T_2 - mg = ma$। दिए गए मानों को प्रतिस्थापित करते हुए: \\\\ $900 - 300 = m(10 + 10)$, हल करने पर हमें प्राप्त होता है $m = 30 \\text{ kg}$।
12f48aab-445a-4687-9cba-777affb4adeb	Consider a block connected by two spring balances $S_1$ and $S_2$ as shown in the figure. The lift is accelerating upwards with acceleration $a = 10 \\text{ m/s}^2$. The reading of $S_1$ is $90 \\text{ kg}$ and for $S_2$ is $30 \\text{ kg}$. The mass is stationary with respect to the lift. Then the value of mass $m$ of the block is:	question_images/Screenshot_2025-01-23_180945_vPHIZOo.png	$60 \\text{ kg}$		$30 \\text{ kg}$		$120 \\text{ kg}$		None of these		B	Newton's Second Law of Motion	We apply Newton's second law: $T_1 - T_2 - mg = ma$. Substituting the values: \\\\ $900 - 300 = m(10 + 10)$, solving we get $m = 30 \\text{ kg}$.		1	$60 \\text{ kg}$	$30 \\text{ kg}$	$120 \\text{ kg}$	इनमें से कोई नहीं	चित्र में दर्शाए गए दो स्प्रिंग बैलेंस $S_1$ और $S_2$ से जुड़े एक ब्लॉक पर विचार करें। लिफ्ट $a = 10 \\text{ m/s}^2$ त्वरण के साथ ऊपर की ओर गति कर रही है। $S_1$ का पठन $90 \\text{ kg}$ और $S_2$ का पठन $30 \\text{ kg}$ है। द्रव्यमान लिफ्ट के सापेक्ष स्थिर है। तब ब्लॉक के द्रव्यमान $m$ का मान क्या है:	हम न्यूटन के द्वितीय नियम को लागू करते हैं: $T_1 - T_2 - mg = ma$। दिए गए मानों को प्रतिस्थापित करते हुए: \\\\ $900 - 300 = m(10 + 10)$, हल करने पर हमें प्राप्त होता है $m = 30 \\text{ kg}$।
\.


--
-- Data for Name: courses_app_chapterquestion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_chapterquestion (id, chapter_id, question_id) FROM stdin;
11	6cc6e5c1-28d6-4970-9044-29c94f09f732	056209dd-8dbb-49aa-ac31-fff63a63c418
12	6cc6e5c1-28d6-4970-9044-29c94f09f732	12f48aab-445a-4687-9cba-777affb4adeb
13	6cc6e5c1-28d6-4970-9044-29c94f09f732	e37d7d45-6782-4765-8777-1e408152c003
14	6cc6e5c1-28d6-4970-9044-29c94f09f732	dc30f11b-5abe-4d0f-96fb-7190e5100ecb
15	cefb3347-5169-4e68-8390-2f513d1ca99a	d1e14950-5986-45dc-92e7-804f3233c324
16	cefb3347-5169-4e68-8390-2f513d1ca99a	e7019dc1-0f82-4d1c-810f-6c3de858fe8d
17	cefb3347-5169-4e68-8390-2f513d1ca99a	f7547e85-6f03-4c96-89fd-a1d10cf85fc2
18	cefb3347-5169-4e68-8390-2f513d1ca99a	bb286a6f-191a-424d-8339-2eea32aa8e41
\.


--
-- Data for Name: courses_app_exam; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_exam (exam_id, exam_title, "is_fullCourseExam", "is_fullSubjectExam", "is_fullChapterExam", chapter_id, course_id, subject_id, "is_customTest", "time", diffculty, user_id) FROM stdin;
4d93d302-c0d9-4587-8653-bf52ec36e41b	Kinematics Level 1 Exam	f	f	t	6cc6e5c1-28d6-4970-9044-29c94f09f732	52b9655f-58ad-4168-8379-3f841e0c6f8d	1a7012a4-4e51-4be2-a4fc-94c42ccb0876	f	60	1	\N
0ddb4916-e68d-46eb-bec6-9ee8652080e8	customtest	f	f	f	\N	\N	\N	t	10	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
dea02edf-bccf-41f5-8488-7560a403c75a	customtest	f	f	f	\N	\N	\N	t	10	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
d90977bb-5d36-46b1-a1db-81b3568ba441	customtest	f	f	f	\N	\N	\N	t	10	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
d1c29081-7916-48f5-ae5b-635a1895a2e7	customtest	f	f	f	\N	\N	\N	t	10	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
\.


--
-- Data for Name: courses_app_examquestion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_examquestion (id, exam_id, question_id) FROM stdin;
53	0ddb4916-e68d-46eb-bec6-9ee8652080e8	bb286a6f-191a-424d-8339-2eea32aa8e41
54	0ddb4916-e68d-46eb-bec6-9ee8652080e8	056209dd-8dbb-49aa-ac31-fff63a63c418
55	dea02edf-bccf-41f5-8488-7560a403c75a	e37d7d45-6782-4765-8777-1e408152c003
56	dea02edf-bccf-41f5-8488-7560a403c75a	12f48aab-445a-4687-9cba-777affb4adeb
57	dea02edf-bccf-41f5-8488-7560a403c75a	dc30f11b-5abe-4d0f-96fb-7190e5100ecb
58	dea02edf-bccf-41f5-8488-7560a403c75a	056209dd-8dbb-49aa-ac31-fff63a63c418
59	d90977bb-5d36-46b1-a1db-81b3568ba441	d1e14950-5986-45dc-92e7-804f3233c324
60	d90977bb-5d36-46b1-a1db-81b3568ba441	12f48aab-445a-4687-9cba-777affb4adeb
61	d1c29081-7916-48f5-ae5b-635a1895a2e7	12f48aab-445a-4687-9cba-777affb4adeb
62	d1c29081-7916-48f5-ae5b-635a1895a2e7	e7019dc1-0f82-4d1c-810f-6c3de858fe8d
63	d1c29081-7916-48f5-ae5b-635a1895a2e7	bb286a6f-191a-424d-8339-2eea32aa8e41
64	d1c29081-7916-48f5-ae5b-635a1895a2e7	dc30f11b-5abe-4d0f-96fb-7190e5100ecb
\.


--
-- Data for Name: courses_app_lecturevideo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_lecturevideo (id, video_title, video_path, chapter_id, thumbnail) FROM stdin;
1	Kinematics Class 1	https://www.youtube.com/watch?v=PSCB_jLyj_8	6cc6e5c1-28d6-4970-9044-29c94f09f732	video_images/1_2.webp
2	Kinematics Class 2	https://www.youtube.com/watch?v=PSCB_jLyj_8	6cc6e5c1-28d6-4970-9044-29c94f09f732	video_images/1_3.webp
3	Kinematics Class 3	https://www.youtube.com/watch?v=PSCB_jLyj_8	6cc6e5c1-28d6-4970-9044-29c94f09f732	video_images/1_4.webp
4	Kinematics Class 4	https://www.youtube.com/watch?v=5il9eRXYjzQ	5a059a81-b56c-40d3-8868-d9755e4b9025	video_images/1_5.webp
5	Kinematics Class 4	https://www.youtube.com/watch?v=5il9eRXYjzQ	6cc6e5c1-28d6-4970-9044-29c94f09f732	video_images/1_5_HTrlnLI.webp
6	Sample Video	https://player.vimeo.com/video/1048446000?h=af6d23f708	5a059a81-b56c-40d3-8868-d9755e4b9025	video_images/1_2_SDD8wTu.webp
\.


--
-- Data for Name: courses_app_usercoursedata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_usercoursedata (id, progress, course_id, user_id) FROM stdin;
1	0	52b9655f-58ad-4168-8379-3f841e0c6f8d	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
2	0	385f03b3-b9eb-487d-833b-738aae2108d2	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
3	0	c3517806-8095-42c4-9f3f-4e912c630949	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
\.


--
-- Data for Name: courses_app_userexamdata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_app_userexamdata (id, exam_id, current_question_index, answers, visited, marked_for_review, time_remaining, is_timer_running, is_submitted, is_active, attempt_number, user_id) FROM stdin;
26	dea02edf-bccf-41f5-8488-7560a403c75a	2	{"0": "A", "1": "A"}	[0, 1]	[]	592	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
20	4d93d302-c0d9-4587-8653-bf52ec36e41b	1	{"0": "C", "1": "D", "2": "D", "6": "D"}	[0, 1, 2, 3, 4, 5, 6]	[1, 2]	1704	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
21	1846395e-8dd3-4b7c-8b5b-249e844d0970	0	{}	[]	[]	10	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
22	a0f76c79-1a01-48ad-9553-544b16b0e5be	1	{"0": "A", "1": "A"}	[0, 1]	[]	1800	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
23	d10946e7-9b9c-4b30-819d-dda445d1700d	0	{}	[]	[]	10	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
27	d90977bb-5d36-46b1-a1db-81b3568ba441	0	{"0": "A"}	[0, 1]	[]	509	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
24	88935190-29b8-4e20-b153-09f21149826a	1	{}	[0, 1, 2, 3]	[]	593	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
25	0ddb4916-e68d-46eb-bec6-9ee8652080e8	0	{"0": "B"}	[0]	[]	519	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
28	d1c29081-7916-48f5-ae5b-635a1895a2e7	0	{}	[0, 1, 2, 3]	[]	592	f	f	t	1	ba205f53-fcac-42ee-af5c-7ab3eb7440ed
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2025-01-13 19:21:07.127099+05:30
2	contenttypes	0002_remove_content_type_name	2025-01-13 19:21:07.140025+05:30
3	auth	0001_initial	2025-01-13 19:21:07.20357+05:30
4	auth	0002_alter_permission_name_max_length	2025-01-13 19:21:07.210889+05:30
5	auth	0003_alter_user_email_max_length	2025-01-13 19:21:07.215209+05:30
6	auth	0004_alter_user_username_opts	2025-01-13 19:21:07.228723+05:30
7	auth	0005_alter_user_last_login_null	2025-01-13 19:21:07.244498+05:30
8	auth	0006_require_contenttypes_0002	2025-01-13 19:21:07.254441+05:30
9	auth	0007_alter_validators_add_error_messages	2025-01-13 19:21:07.262341+05:30
10	auth	0008_alter_user_username_max_length	2025-01-13 19:21:07.274903+05:30
11	auth	0009_alter_user_last_name_max_length	2025-01-13 19:21:07.284448+05:30
12	auth	0010_alter_group_name_max_length	2025-01-13 19:21:07.297015+05:30
13	auth	0011_update_proxy_permissions	2025-01-13 19:21:07.3075+05:30
14	auth	0012_alter_user_first_name_max_length	2025-01-13 19:21:07.316927+05:30
15	main_app	0001_initial	2025-01-13 19:21:07.403864+05:30
16	admin	0001_initial	2025-01-13 19:21:07.437505+05:30
17	admin	0002_logentry_remove_auto_add	2025-01-13 19:21:07.444741+05:30
18	admin	0003_logentry_add_action_flag_choices	2025-01-13 19:21:07.453576+05:30
19	authtoken	0001_initial	2025-01-13 19:21:07.490617+05:30
20	authtoken	0002_auto_20160226_1747	2025-01-13 19:21:07.526735+05:30
21	authtoken	0003_tokenproxy	2025-01-13 19:21:07.529286+05:30
22	authtoken	0004_alter_tokenproxy_options	2025-01-13 19:21:07.533131+05:30
23	courses_app	0001_initial	2025-01-13 19:21:07.708843+05:30
24	sessions	0001_initial	2025-01-13 19:21:07.722428+05:30
25	sites	0001_initial	2025-01-13 19:21:07.728334+05:30
26	sites	0002_alter_domain_unique	2025-01-13 19:21:07.757202+05:30
27	courses_app	0002_remove_exam_chapter_uuid_remove_exam_course_uuid_and_more	2025-01-13 19:29:25.80111+05:30
28	courses_app	0003_remove_exam_chapter_reference_alter_exam_chapter	2025-01-13 19:29:25.855965+05:30
29	courses_app	0004_exam_questions	2025-01-13 19:48:06.848977+05:30
30	courses_app	0005_alter_question_options_remove_question_chapter_and_more	2025-01-13 23:20:00.937069+05:30
31	courses_app	0006_question_chapters_question_exams_and_more	2025-01-13 23:33:23.92828+05:30
32	courses_app	0007_lecturevideo_thumbnail	2025-01-14 13:14:42.145521+05:30
33	courses_app	0008_question_option_a_text_hindi_and_more	2025-01-23 16:25:13.239684+05:30
34	courses_app	0009_exam_is_customtest	2025-01-24 22:32:12.031862+05:30
35	courses_app	0010_exam_time	2025-01-24 22:42:50.230277+05:30
36	courses_app	0011_exam_diffculty	2025-01-24 22:43:40.493968+05:30
37	courses_app	0012_exam_user	2025-01-25 01:12:06.158944+05:30
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- Data for Name: django_site; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_site (id, domain, name) FROM stdin;
1	example.com	example.com
\.


--
-- Data for Name: main_app_customuser_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_app_customuser_groups (id, customuser_id, group_id) FROM stdin;
\.


--
-- Data for Name: main_app_customuser_user_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_app_customuser_user_permissions (id, customuser_id, permission_id) FROM stdin;
\.


--
-- Data for Name: main_app_profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_app_profile (id, bio, user_id) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 72, true);


--
-- Name: courses_app_chapterquestion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_app_chapterquestion_id_seq', 18, true);


--
-- Name: courses_app_examquestion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_app_examquestion_id_seq', 64, true);


--
-- Name: courses_app_lecturevideo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_app_lecturevideo_id_seq', 6, true);


--
-- Name: courses_app_usercoursedata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_app_usercoursedata_id_seq', 3, true);


--
-- Name: courses_app_userexamdata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_app_userexamdata_id_seq', 28, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 18, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 37, true);


--
-- Name: django_site_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_site_id_seq', 1, true);


--
-- Name: main_app_customuser_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.main_app_customuser_groups_id_seq', 1, false);


--
-- Name: main_app_customuser_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.main_app_customuser_user_permissions_id_seq', 1, false);


--
-- Name: main_app_profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.main_app_profile_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

