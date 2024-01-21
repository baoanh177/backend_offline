--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying NOT NULL,
    status boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_devices (
    id integer NOT NULL,
    agent character varying(500),
    os_name character varying(50),
    os_version character varying(50),
    client_type character varying(50),
    client_name character varying(50),
    device_type character varying(50),
    device_brand character varying(50),
    last_active timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    user_id integer
);


ALTER TABLE public.users_devices OWNER TO postgres;

--
-- Name: users_devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users_devices ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_devices_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, password, status, created_at, updated_at) FROM stdin;
2	baoanhfpl	aaa@gmail.com	111111	t	2024-01-17 07:25:48.24-08	2024-01-17 07:25:48.24-08
1	Bao Anh new	baoanh123@gmail.com	111111	t	2024-01-14 01:40:51.694383-08	2024-01-21 08:55:35.73-08
\.


--
-- Data for Name: users_devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_devices (id, agent, os_name, os_version, client_type, client_name, device_type, device_brand, last_active, created_at, updated_at, user_id) FROM stdin;
6	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36	Windows	10	browser	Chrome	desktop		2024-01-21 07:49:25.665-08	2024-01-21 07:49:25.668-08	2024-01-21 07:49:25.668-08	2
9	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36	Android	10	browser	Chrome Mobile	smartphone		2024-01-21 08:56:35.111-08	2024-01-21 08:55:16.215-08	2024-01-21 08:56:37.303-08	1
\.


--
-- Name: users_devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_devices_id_seq', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: users_devices users_devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_devices
    ADD CONSTRAINT users_devices_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

