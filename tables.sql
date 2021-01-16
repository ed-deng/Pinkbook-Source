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
CREATE TABLE public.notes (
	"_id" serial NOT NULL,
	"name" varchar,
    "description" varchar,
	"date_created" varchar,
    "page_number" bigint,
    "date_updated" varchar,
    "shared_with" varchar,
	CONSTRAINT "people_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



