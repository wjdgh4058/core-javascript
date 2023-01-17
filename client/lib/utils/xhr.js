/* readyState
0: uninitalized  // 초기화
1: loading     // 로딩
2: loaded      // 로딩이 완료된
3:interative   // 인터랙티브
4:complete    // 완료
 */

// 비동기 통신 오픈
/* xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.addEventListener("readystatechange", () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    if (xhr.readyState === 4) {
      console.log("통신 성공");
    }
  } else {
    console.log("통신 실패");
  }
});

// 서버에 요청
xhr.send(); */

// console.log(xhr.status);

const xhrData = ({
  method = "GET",
  url = "",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) => {
  // const { method, url, body } = options;

  const xhr = new XMLHttpRequest();
  // 비동기 통신 오픈
  xhr.open(method, url);

  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  // 객체 구조 분해 할당

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr;
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail("통신 실패");
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
};

/* xhrData({
  url: "https://jsonplaceholder.typicode.com/users",
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.log(err);
  },
}); */

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete(
  "https://jsonplaceholder.typicode.com/users/1",
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);

/* xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "Eyes open",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
}); */
