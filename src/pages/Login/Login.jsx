import React, { useState } from "react";
import { Facebook, Google, Twitter, Github } from "react-bootstrap-icons";
import logo from "../../../public/voll-med-logo.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribe: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviá-los para um servidor ou executar outra lógica.
  };

  return (
    <>
      <section className="">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)", minHeight: "100vh"}}
        >
          <div className="container mt-5">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img src={logo} style={{ width: "350px" }} />
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  A melhor maneira
                  <br />
                  <span style={{ color: "#339CFF" }}>
                    de agendar consultas!
                  </span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Evite filas acessando nosso pronto-atendimento com consultas
                  através do computador, celular ou tablet. O cuidado que você
                  merece, de onde estiver. Atendimento 24h on-line com médicos
                  especialistas.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              name="firstName"
                              className="form-control"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="Nome"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example2"
                              name="lastName"
                              className="form-control"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Sobrenome"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Endereço de email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          name="password"
                          className="form-control"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Senha"
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="form2Example33"
                          name="subscribe"
                          checked={formData.subscribe}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          Inscreva-se em nossa newsletter
                        </label>
                      </div>
                      <div className="d-flex">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4 w-100"
                        >
                          Cadastrar
                        </button>
                      </div>
                      <div className="text-center">
                        <p>ou acesse com:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <Facebook
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></Facebook>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <Google
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></Google>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <Twitter
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></Twitter>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <Github
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></Github>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
