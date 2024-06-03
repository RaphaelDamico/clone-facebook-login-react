import { useState, useEffect } from "react";
import facebookLogo from "../../assets/facebook.svg";
import styles from "./styles.module.css";
//import Footer from "../../components/Footer"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[usuarioLogado, setUsuarioLogado] = useState(false);

  useEffect(() => {
    if(usuarioLogado) {
      if(email === 'usuario@email.com' && password === '12345')
        alert('Seja bem vindo ao Facebook!');
      else
        alert('Ops, email ou senha incorretos!');
        setUsuarioLogado(false);
    }
  }, [usuarioLogado, email, password]);

  const handleEntrar = () => {
    setUsuarioLogado(true);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageLogoContainer}>
            <div className={styles.imageContainer}>
              <img
                className={styles.fbLogo}
                src={facebookLogo}
                alt="logo do facebook"
              />
            </div>
            <h2 className={styles.subtitle}>
              O Facebook ajuda você a se conectar e compartilhar com as pessoas
              que
              <br />
              fazem parte da sua vida.
            </h2>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.card}>
              <form className={styles.form}>
                <div className={styles.inputContainer}>
                  <div className={styles.emailContainer}>
                    <input
                      className={styles.emailInput}
                      type="text"
                      name="Email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email ou telefone"
                    />
                  </div>
                  <div className={styles.passwordContainer}>
                    <input
                      className={styles.passwordInput}
                      type="password"
                      name="Senha"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Senha"
                    />
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button className={styles.buttonLogin} onClick={handleEntrar}>
                    Entrar
                  </button>
                </div>
                <div className={styles.forgotPasswordContainer}>
                  <a
                    className={styles.forgotPassword}
                    href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
                <div className={styles.hrDiv}>
                </div>
                <div className={styles.createAccountContainer}>
                  <button className={styles.buttonCreate}>
                    Criar nova conta
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.spanContainer}>
              <span>
                <a
                  className={styles.createLink}
                  href="https://www.facebook.com/pages/create/?ref_type=registration_form"
                >
                  Crie uma Página
                </a> para uma celebridade, uma marca ou uma empresa
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
