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
-- Data for Name: courses_app_course; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses_app_course (course_type, title, description, price, current_price, id, portions, watch_hours, chapters, classes, studymaterials, validity, content_left_1, content_left_2, content_left_3, content_left_4, content_right_1, content_right_2, content_right_3, content_right_4, img, tests) VALUES ('Online', 'NEET 2025 Preparation', 'This course is designed to provide a comprehensive preparation guide for NEET 2025, covering all the topics from Physics, Chemistry, and Biology with mock tests and practice exercises.', 180.00, 144.00, '52b9655f-58ad-4168-8379-3f841e0c6f8d', '14', '2300', '50', '900', '40', 365, 'Introduction to NEET', 'Physics - Mechanics & Electricity', 'Chemistry - Organic Chemistry', 'Biology - Human Physiology', 'Chemistry - Physical Chemistry', 'Physics - Optics & Waves', 'Biology - Genetics & Evolution', 'Practice Tests & Revision', 'course_images/1_4_9inji2V.webp', '50');
INSERT INTO public.courses_app_course (course_type, title, description, price, current_price, id, portions, watch_hours, chapters, classes, studymaterials, validity, content_left_1, content_left_2, content_left_3, content_left_4, content_right_1, content_right_2, content_right_3, content_right_4, img, tests) VALUES ('Online', 'Introduction to Programming', 'This course covers the basics of programming with Python, including variables, loops, conditionals, and functions.', 100.00, 90.00, '0dcd4192-bbfc-44b6-b85f-51009d8e721d', '10', '15', '30', '120', '30', 365, 'Introduction to Python', 'Data Types and Variables', 'Control Structures', 'Functions and Methods', 'Python Syntax', 'Loops and Conditional Statements', 'Error Handling', 'Object-Oriented Programming', 'course_images/1_5_MQNlFNP.webp', '50');
INSERT INTO public.courses_app_course (course_type, title, description, price, current_price, id, portions, watch_hours, chapters, classes, studymaterials, validity, content_left_1, content_left_2, content_left_3, content_left_4, content_right_1, content_right_2, content_right_3, content_right_4, img, tests) VALUES ('Bootcamp', 'JEE Advanced Preparation', 'This intensive bootcamp focuses on advanced topics and problem-solving techniques to help students excel in JEE Advanced exams.', 300.00, 255.00, '385f03b3-b9eb-487d-833b-738aae2108d2', '10', '1300', '33', '170', '200', 365, 'Advanced Physics - Electrodynamics', 'Advanced Mathematics - Vectors & 3D', 'Chemistry - Inorganic Chemistry', 'Physics - Modern Physics', 'Advanced Chemistry - Coordination Compounds', 'Mathematics - Differential Equations', 'Mock Tests and Previous Year Papers', 'Time Management and Strategy Tips', 'course_images/1_3_7WoizcJ.webp', '50');
INSERT INTO public.courses_app_course (course_type, title, description, price, current_price, id, portions, watch_hours, chapters, classes, studymaterials, validity, content_left_1, content_left_2, content_left_3, content_left_4, content_right_1, content_right_2, content_right_3, content_right_4, img, tests) VALUES ('Online', 'JEE Mains 2025 Preparation', 'A complete course to prepare for JEE Mains 2025, covering all the key subjects: Physics, Chemistry, and Mathematics with in-depth explanations and practice tests.', 200.00, 180.00, 'c3517806-8095-42c4-9f3f-4e912c630949', '12', '900', '30', '20', '30', 122, 'Introduction to JEE Mains', 'Physics - Mechanics', 'Chemistry - Organic Chemistry', 'Mathematics - Calculus', 'Mathematics - Algebra', 'Physics - Thermodynamics', 'Chemistry - Physical Chemistry', 'Mock Tests and Practice Papers', 'course_images/1_2_9oCzoXc.webp', '50');
INSERT INTO public.courses_app_course (course_type, title, description, price, current_price, id, portions, watch_hours, chapters, classes, studymaterials, validity, content_left_1, content_left_2, content_left_3, content_left_4, content_right_1, content_right_2, content_right_3, content_right_4, img, tests) VALUES ('Bootcamp', 'JEE Advanced Preparation', 'This intensive bootcamp focuses on advanced topics and problem-solving techniques to help students excel in JEE Advanced exams.', 300.00, 255.00, '32abf448-9d03-42fe-8f80-ea204de3d78a', '10', '1300', '33', '170', '200', 365, 'Advanced Physics - Electrodynamics', 'Advanced Mathematics - Vectors & 3D', 'Chemistry - Inorganic Chemistry', 'Physics - Modern Physics', 'Advanced Chemistry - Coordination Compounds', 'Mathematics - Differential Equations', 'Mock Tests and Previous Year Papers', 'Time Management and Strategy Tips', 'course_images/1_4_8Dx2KU5.webp', '50');


--
-- PostgreSQL database dump complete
--

