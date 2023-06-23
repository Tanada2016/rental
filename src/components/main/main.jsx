import React from "react";
import "./main.scss";
import { Routes, Route } from "react-router-dom";
import FormLogin from "../form-login/formLogin";
import FormNewCase from "../form-newCase/formNewCase";
import Cases from "../cases/cases";
import CaseDetail from "../caseDetail/caseDetail";
import Officers from "../officers/officers";
import OfficerDetail from "../officerDetail/officerDetail";
import { useSelector } from "react-redux";
import Error from "../error/error";

const Main = () => {
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <main className="main">
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <div className="main-page">
              <div className="content">
                <h1 className="title">Найдем потерянный велосипед</h1>
                <p className="text">
                  В этом сезоне участились кражи велосипедов. Для решения этой
                  проблемы мы создали приложение для учета этих случаев и
                  отслеживать прогресс. Вам просто нужно заполнить форму.
                  Спасибо что вместе с нами, делаете аренду велосипедов удобнее
                  и безопснее.
                </p>
              </div>
            </div>
          }
        />
        <Route path={"/login"} element={<FormLogin />} />
        <Route path={"/new-case"} element={<FormNewCase />} />
        <Route path={"/cases"} element={isLogin ? <Cases /> : <Error />} />
        <Route
          path={"/cases/:caseId"}
          element={isLogin ? <CaseDetail /> : <Error />}
        />
        <Route
          path={"/officers"}
          element={isLogin ? <Officers /> : <Error />}
        />
        <Route
          path={"/officers/:officerId"}
          element={isLogin ? <OfficerDetail /> : <Error />}
        />
      </Routes>
    </main>
  );
};

export default Main;
