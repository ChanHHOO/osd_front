const Validates = {};

Validates.required = value => {
  return new Promise((resolve, reject) => {
    let data = value ? undefined : "Required";
    resolve(data);
  });
};

Validates.email = value => {
  return new Promise((resolve, reject) => {
    if(!value) resolve(undefined);
    let data = value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "잘못된 E-Mail형식입니다."
    : undefined
    resolve(data);
  });
};

Validates.NotSpecialCharacters = value => {
  return new Promise((resolve, reject) => {
    if(!value) resolve(undefined);
    let data = value && !/^[a-zA-Zㄱ-힣0-9]*$/i.test(value)
    ? "특수문자는 사용할 수 없습니다."
    : undefined
    resolve(data);
  });
};


Validates.checkEmail = (value) => {
  return fetch("http://localhost:8080/users/checkEmail", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ email: value }) })
        .then(res => res.json())
        .then(res => {
          if(!value) return Promise.resolve(undefined);
          return res.success
          ? undefined
          : res.error
        })
};

Validates.checkNickName = (value) => {
  return fetch("http://localhost:8080/users/checkNickName", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ nick_name: value }) })
        .then(res => res.json())
        .then(res => {
          if(!value) return Promise.resolve(undefined);
          return res.success
          ? undefined
          : res.error
        })
};

Validates.checkFBUser = (value) => {
  return fetch("http://localhost:8080/users/checkFBUser", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ FB_user_id: value }) })
        .then(res => res.json())
        .then(res => {
          if(!value) return Promise.resolve(undefined);
          return res.success
          ? undefined
          : res.error
        })
};

export default Validates;
