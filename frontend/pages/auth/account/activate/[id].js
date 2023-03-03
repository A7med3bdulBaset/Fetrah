import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Layout from "../../../../components/Layout";
import { withRouter } from "next/router";
import { signup } from "../../../../actions/auth";
import QuestionsForm from "../../../../components/auth/PreActivationForm/QuestionsForm";

const ActivateAccount = ({ router }) => {
  const [gender, setGender] = useState("");
  const [values, setValues] = useState({
    name: "",
    token: "",
    error: "",
    loading: false,
    success: false,
    showButton: true,
  });

  const { name, token, error, loading, success, showButton } = values;

  useEffect(() => {
    let token = router.query.id;
    if (token) {
      const decodedToken = jwt.decode(token);
      setGender(decodedToken.gender);
      setValues({ ...values, name: decodedToken.name, token });
    }
  }, [router]);

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });

    signup({ token }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
          showButton: false,
        });
      } else {
        setValues({
          ...values,
          loading: false,
          success: true,
          showButton: false,
        });
      }
    });
  };

  const showPreActivationForm = () => {
    return (
      <>
        <QuestionsForm gender={gender} />
      </>
    );
  };

  const showLoading = () => (loading ? <h2>Loading...</h2> : "");

  return (
    <Layout>
      <div className="container">
        <h3 className="pb-4">
          مرحبا يا {name}, قم بادخال بياناتك حتى يتم تفعيل حسابك
        </h3>
        {showPreActivationForm()}
        {showLoading()}
        {error && error}
        {success &&
          "You have successfully activated your account. Please signin."}
        {/* {showButton && (
                    <button className="btn btn-outline-primary" onClick={clickSubmit}>
                        Activate Account
                    </button>
                )} */}
      </div>
    </Layout>
  );
};

export default withRouter(ActivateAccount);
