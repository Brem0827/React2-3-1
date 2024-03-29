[![Since](https://img.shields.io/badge/since-2023.08.31-333333.svg?style=flat-square)](https://github.com/Brem0827/Tech-Stack)
[![author](https://img.shields.io/badge/author-Brem0827-0066FF.svg?style=flat-square)](https://github.com/Brem0827/Tech-Stack)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#Tech-Stack)

[![Watch on GitHub](https://img.shields.io/github/watchers/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/stargazers)
[![Fork on GitHub](https://img.shields.io/github/forks/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/network/members)

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./image/logo.png" alt="Logo" width="80" height="80">
  </a>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">

</div>

# 🏃Next.js
### 📔 201930324 이현종

<table align="center">
    <tr>
        <td align="center">
	    <a href="https://github.com/Brem0827">
	    	<img src="https://avatars.githubusercontent.com/u/62270266?v=4?s=100" width="100px;" alt=""/>
				<br/>
					<sub>
					<b>이현종</b>
				<br/>
	    	<img src="https://us-central1-progress-markdown.cloudfunctions.net/progress/100"/>
	        </sub>
	    </a>
	</td>
    </tr>
</table>

💕 주차
---
1. 💭[1주차](#1주차)➡️
2. 💭[2주차](#2주차)➡️
3. 💭[3주차](#3주차)➡️
4. 💭[6주차](#6주차)➡️
5. 💭[7주차](#7주차)➡️
6. 💭[중간고사](#중간고사)➡️
7. 💭[9주차](#9주차)➡️
8. 💭[10주차](#10주차)➡️
9. 💭[11주차](#11주차)➡️
10. 💭[12주차](#12주차)➡️
11. 💭[13주차](#13주차)➡️
12. 💭[14주차](#14주차)➡️

---
# 14주차

🔋 2023.11.30

<details><summary>💬 Redux </summary>

- JavaScript(자바스트립트) 상태관리 라이브러리이다.

</details>

<details><summary>💬 Redux의 기본 개념 : 세 가지 원칙 </summary>

## Single source of truth

- 동일한 데이터는 항상 같은 곳에서 가지고 온다.

- 즉, 스토어라는 하나뿐인 데이터 공간이 있다는 의미이다.

## State is read-only

- 리액트에서는 setState 메소드를 활용해야만 상태 변경이 가능하다.

- 리덕스에서도 액션이라는 객체를 통해서만 상태를 변경할 수 있다.

## Changes are made with pure functions

- 변경은 순수함수로만 가능하다.

- 리듀서와 연관되는 개념이다.

- Store(스토어) – Action(액션) – Reducer(리듀서)

</details>

<details><summary>💬 Redux의 장점 </summary>

- 상태를 예측 가능하게 만든다. (순수함수를 사용하기 때문)

- 유지보수 (복잡한 상태 관리와 비교)

- 디버깅에 유리 (action과 state log 기록 시) → redux dev tool (크롬 확장)

- 테스트를 붙이기 용의 (순수함수를 사용하기 때문)

</details>

<details><summary>💬 Styled JSX </summary>

- 새로운 스타일링 언어를 배우지 않고 자바스크립트와 CSS규칙을 함께 사용

- Styled JSX는 CSS-in-JS 라이브러리, 즉 CSS 속성 지정을 위해 자바스크립트를 사용할 수 있는 라이브러리 입니다.

```jsx

export default function Button(props) {
    return(
        <>
            <button className="button">{props.children}</button>
            <style jsx>
                {`
                    .button {
                        padding: 1em;
                        border-radius: 1em;
                        border: none;
                        background: green;
                        color: white;
                    }
                `}
            </style>
        </>
    )
}

```

</details>

<details><summary>💬 CSS Module </summary>

- 자바스크립트 코드 안에서 정의한 CSS 규칙은 실행 도중 또는 컴파일 시점에 CSS로 변환됩니다.

- 변환 시점은 사용하는 라이브러리나 설정에 따라 다릅니다.

- 대부분의 CSS-in-JS 라이브러리는 IDE나 코드 편집기 등의 개발 도구에 대한 지원이 부족합니다.

- 문법 하이라이팅, 자동 완성, 린팅 등의 기능을 제공하지 않기 때문에 개발자가 불편함을 겪을 수 있습니다.

- 또한 CSS-in-JS 방식을 사용하면 코드 내에서 CSS에 대한 의존성이 점점 더 커지기 떄문에 애플리케이션 번들이 더 커지고 느려지기 쉽습니다.

- 서버가 미리 CSS 규칙을 생성해놓아도 클라이언트에서 리액트 하이드레이션이 끝나면 CSS 규칙을 재생성 해야합니다.

## 자동으로 접두사 추가

- Can I Use 에서 가져온 값을 이용해서 CSS 규칙에 벤더별 접두사를 붙여줍니다.

## 모든 브라우저에서의 플렉스박스 버그 수정

- PostCSS는 커뮤니티에서 엄선한 플렉스박스 이슈를 참고하여 모든 브라우저에서 플렉스박스가 올바르게 작동할 수 있도록 몇 가지 기능을 추가하였습니다.

## IE11 호환성

- PostCSS 컴파일은 새로운 CSS 기능들을 컴파일해서 IE11과 같이 오래된 브라우저에서도 사용할 수 있도록 해줍니다.

- 물론 모든 것을 다 컴파일해주지는 않습니다.

</details>

<details><summary>💬 SASS </summary>

- Styled JSX나 CSS Module과 마찬가지로 Next.js는 기본적으로 SASS를 지원합니다.

- 다만 패키지를 설치해야지만 사용 가능합니다

```jsx

import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={StyleSheet.homepage}>
            <h1> Welcome to the CSS Modules example</h1>
        </div>
    );
}

```

```css

.button-danger {
  @extend .button-default;
  color: white;
}

&.danger {
  color:white
}

```

</details>

<details><summary>💬 UI 라이브러리 </summary>

- UI 라이브러르, 프레임워크, 유틸리티 기능이 필수는 아닙니다.

- UI 라이브러리의 핵심은 많이 사용하는 기능을 추상화하고 서로 다른 UI 간에도 코드 재사용을 최대화하며, 생산성을 향상시키고 테스트할 뿐만 아니라 UI 컴포넌트에 테마를 적용할 수 있도록 하는 것 입니다.

</details>

<details><summary>💬 Chakra UI </summary>

## 접근성

- 버튼, 모달, 입력 등과 같이 다양한 내장 컴포넌트를 제공하므로 접근하기 쉽습니다.

## 테마

- 레이브러리에서 버튼의 기본 배경색, 모서리 곡률, 패딩 등에 관한 기본 테마를 제공합니다.

- Chakra UI의 내장함수를 사용해서 라이브러리의 컴포넌트와 스타일이나 기본 테마를 변경할 수 있습니다.

## 밝은/어두운 테마

- 밝은 테마와 어두운 테마 모두 지원하며 시스템 설정에 따라 테마를 적용할 수 이씁니다.

## 조합

- Chakra UI의 기본 컴포넌트들을 조립해서 다 많은 컴포넌트를 만들 수 있습니다.

- 라이브러리를 사용해서 마치 레고 블록을 조립하듯 새로운 컴포넌트를 만들 수 있습니다.

## 타입스크립트 지원

- 타입스크립트로 작성되었으며 개발자에게 최고의 개발 경험을 제공합니다.

</details>

<details><summary>💬 TailwindCSS </summary>

## 프레임워크 독립성

- 리액트, 뷰, 앨귤러와 같은 프레임워크나 순수한 HTML 및 자바스크립트에서도 사용할 수 있습니다.

## 테마

- Chakra UI와 마찬가지로 TailwindCSS의 변수값을 조절하여 여러분만의 디자인을 만들 수 있습니다.

## 밝은/어두운 테마 지원

- <html> 요소의 특정 CSS 클래스를 수정해서 어두운 테마를 쉽게 적용하고 해제할 수 있습니다.

## 높은 수준의 최적화

- TailwindCSS에는 많은 CSS 클래스가 있지만 빌드 시점에 사용하지 않는 클래스는 제거됩니다.

## 모바일 지원

- CSS 클래스의 접두사를 활용하여 모바일, 데스크톱, 태블릿 화면에서 원하는 규칙을 지정할 수 있습니다.

</details>

---
# 13주차

🔋 2023.11.23

<details><summary>💬 사용자 인터페이스 </summary>

- 사람(사용자)과 사물 또는 시스템, 기계, 컴퓨터 프로그램 등 사이에서 의사소통을 할 수 있도록 일시적 또는 영구적인 접근을 목적으로 만들어진 물리적, 가상적 매개체

</details>

<details><summary>💬 지역 및 전역 상태 관리 </summary>

- 상태는 동적 정보의 일종입니다.

* 높은 수준의 상호 작용이 가능한 UI 구현합니다.

* 더 뛰어난 UX 개발을 하기 위한 필수 요소 입니다.

- 최신 웹 앱 에서는 UI가 상태를 사용하고 관리하는 경우가 많이 있습니다.

* 밝은 테마에서 어두운 테마로 변경

* 배송 주소를 변경함으로써 폼의 상태를 변경

* 버튼 클릭 만으로 앱의 상태를 변하게 할 수도 있습니다.

- 리액트 앱의 상태 관리가 어려운 것은 데이터의 흐름이 단방향이라는 것 입니다.

- 부모 컴포넌트는 자식에게 속성의 형태로 상태를 전달할 수 있지만, 반대로 자식이 부모에게는 상태를 전달할 수 없습니다.

- 지역 상태는 클래스 컴포넌트나 훅을 사용해서 별다른 어려움 없이 관리할 수 있지만, 전역 상태는 단방향 데이터 흐름 때문에 관리하기가 힘듭니다.

</details>

<details><summary>💬 지역 상태 관리 </summary>

- 지역 상태 관리에 있어서 애플리케이션의 상태는 컴포넌트 스코프 상태를 의미합니다.

- 특정 컴포넌트 안에서만 관리되는 상태를 뜻합니다.

- 다른 컴포넌트들과 데이터를 공유하지 않습니다.

```jsx

import React, {useState} from "react";

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    return(
        <div>
            <b>Count isL {count}</b> <br/>
            <button onClick={() => setCount(count + 1)} >
                Increment +
            </button>
            <button onClick={() => setCount(count - 1)} >
                Decrement -
            </button>
        </div>
    )
}

export default Counter;

```

## 아톰 컴포넌트

- 비교적 작은 크기로 가장 흔하게 접할수 있는 컴포넌트 입니다.

## 로딩 상태

- 클라이언트 측에서 외부 데이터를 읽어올 때, 아직 데이터를 다 가져오지 못한 상황 입니다.

- 즉, 전송한 HTTP 요청이 아직 다 끝나지 않은 상태입니다.

- 이런 경우 일반적으로 로딩 상태값을 true로 설정하고, 전송 요청이 끝날 때까지 UI에 스피너 아이콘 등을 표시할 수 있습니다.

</details>

<details><summary>💬 전역 상태 관리 </summary>

- 전역 상태는 여러 컴포넌트가 공유하는 상태를 의미합니다.

- 어떤 컴포넌트라도 접근 및 수정이 가능한 상태입니다.

- Vue.js나 Angular와는 다르게 React는 데이터의 흐름이 단방향입니다.

</details>

<details><summary>💬 콘텍스트 API </summary>

- 콘텍스트 API는 특정 콘텍스트 내의 모든 컴포넌트 간에 데이터를 공유할 수 있는 매우 직관적인 방법을 제공합니다.

- 명시적으로 다른 컴포넌트에 속성값 형태로 데이터를 전달할 필요도 없고 심지어 자식 컴포넌트가 부모 컴포넌트에게 데이터를 공유할 수도 있습니다.

</details>

---
# 12주차

🔋 2023.11.16

<details><summary>💬 GraphQL API 사용 </summary>

- GraphQL은 API에서 사용할 수 있는 질의 언어로, REST나 SOAP 같은 방식과는 다른 새로운 관점으로 API 데이터를 다룹니다.

- GraphQL을 사용하면 꼭 필요한 데이터만 불러오도록 지정할 수 있으며 한 번의 요청으로 여러 곳의 데이터를 불러올 수 있습니다.

- 사용할 데이터에 대해 정적이면서도 강력한 타입 시스템을 제공하는 등 여러 가지 장점을 지니고 있습니다.

</details>

<details><summary>💬 Apollo Client </summary>

- GraphQL와, 클라이언트를 연결해주는 Node.js 패키지

- 프론트엔드에서 다뤄지는 여러가지 데이터를 graphql을 사용해 DB에서 가져올 수 있도록 해줍니다.

- `npm i graphql @apollo/client`

</details>

---
# 11주차

🔋 2023.11.09

<details><summary>💬 .env </summary>

- .env 파일은 절대 커밋하면 안 됩니다.

- .env 파일에는 중요한 개인 정보가 들어있는 경우가 많기 때문에 버전 관리 시스템 등에 이 파일을 업로드 하지 않아야 합니다.

- 특정 파일이 시스템에 업로드되지 않도록 관리해주는 .gitignore .dockerignore과 같은 파일을 통해 중요한 파일이 배포되거나 커밋되지 않도록 미리 설정해두기 바랍니다.

</details>

<details><summary>🔥 스타일 파일 구성 </summary>

- 스타일 파일은 앱에서 어떤 스타일 관련 기술을 사용하는가에 따라 구성이 달라집니다.

- Emotion, styled-components, JSS와 같은 CSS-in-JS 프레임워크의 경우 컴포넌트별로 스타일 파일을 만듭니다.

- 이렇게 하면 스타일 변경도 쉽습니다.

- 만일 컬러 팔레트, 테마, 미디어 쿼리와 같은 공통 스타일의 경우는 styles/ 디렉토리를 사용합니다.

</details>

<details><summary>🔥 서버에서 REST API 사용하기 </summary>

- REST API를 호출할 때는 퍼블릭 API를 호출할 것인지 아니면 프라이빗 API를 호출할 것 인지를 먼저 알아야 합니다.

- Public API는 어떤 인증이나 권한도 필요 없으며, 누구나 호출할 수 있습니다.

- Private API는 호출 전 반드시 인증과 권한 검사 과정을 거쳐야 합니다.

- 이 밖에 API들도 어떻게 인증과 권한 검사 과정을 거치는지 반드시 확인해야 합니다.

</details>

<details><summary>🔥 ssr-rest-api 프로젝트 </summary>

- Axios 패키지를 추가

- Public API를 호출하여 몇몇 상용자의 이름과 ID를 표시

- 사용자의 이름을 클릭하면 세부 페이지로 이동해서 사용자 정보를 자세히 볼 수 있도록 만듭니다.

- page/indes.js 페이지를 97페이지의 코드처럼 수정합니다.

</details>

<details><summary>🔥 코드 오류 문제 </summary>

- 98페이지까지 코딩을 해도 오류가 나는이유는 몇가지 작업을 더 해줘야 하는데, 교재에 설명이 빠져 있었습니다.

- 사용자 상세 페이지는 pages/users/[username].js 파일을 만들고, 사용자 데이터를 불러오도록 만듭니다.

- 사용자 데이터는 https://localhost:3000/api/04/users/[username]으로 가져올 수 있는데, 여기서 [username]은 가져올 사용자 이름이 있는 경로 매개변수 입니다.

</details>

<details><summary>🔥 클라이언트가 데이터 불러오기 </summary>

- 동적 웹 애플리케이션에서는 클라이언트가 데이터를 불러오는경우가 많습니다.

- 그러나 서버가 데이터를 불러오는 것이 좀 더 안전합니다.

- API 엔드포인트 주소, 매개변수 값, HTTP 헤더, 인증 토큰 값 등 중요한 정보가 외부에 노출되지 않기 때문입니다.

* 브라우저에서 HTTP요청을 보낼 때는 반드시 다음 사항을 지켜야 합니다,

- 믿을 수 있는 곳에만 HTTP요청을 보내야 합니다.

- SSL 인증서를 통해 안전하게 접근할 수 있는 곳의 HTTP API만 사용해야 합니다.

- 브라우저에서 원격 데이터베이스에 직접 연결해서는 안 됩니다.

</details>


<details><summary>🔥 클라이언트에서 REST API 사용 </summary>

- getServerSideProps나 getStaticProps 함수 내에서 REST API를 호출하면 서버가 데이터를 가져오지만, 그 외의 컴포넌트 내에서 데이터를 불러오는 작업은 클라이언트가 실행합니다.

- 클라이언트는 주로 두 가지 시점에 데이터를 불러옵니다.

- 바로 컴포넌트가 마운트 된 후와 특정 이벤트가 발생한 후 입니다.

</details>

<details><summary>🔥 csr-rest-api 프로젝트 </summary>

- 새로운 Next를 만들어 클라이언트가 API를 호출하도록 변경합니다.

- pages/index.js파일을 105페이지 코드와 같이 수정합니다.

- 서버에서 API를 호출할 때와 다른 부분

1. 첫 번째: return 안을 보면 'Loading uses...'문자열만 가지고 있습니다.

- HomePage 컴포넌트의 초기 상태 입니다.

2. 두 번째: 리액트 하이드레이션이 일어난 후에야 사용자 목록을 볼 수 있습니다.

- 클라이언트는 컴포넌트가 마운트된 후에 브라우저의 fetch API를 사용해서 HTTP 요청을 보냅니다.

- 사용자 상세 페이지를 다음 순서대로 만들어 봅니다.

- pages/users/[username].js 파일생성 -> getServerSideProps 함수 만들기 -> 경로 매개변수[username]과 .env 인증 토큰 값 가져오기

* 이 코드의 문제점

1. 교차 출처 리소스 공유(CORS)는 브라우저에서 제공하는 보안 기능으로, 서로 다른 도메인에 API 요청을 보낼 때 발생할 수 있는 여러 가지 보안 위험을 제어합니다. -> 서버에서 데이터를 불러오는 경우 이런 문제는 발생하지 않습니다.

- 지금은 로컬에서 실행되기 때문에 CORS문제가 발생하지 않는 것 입니다.

- 원격 서버에서 데이터를 가져오는 경우 CORS 문제가 쉽게 발생합니다.

2. 클라이언트에서 인증 토큰을 노출한다는 점 입니다.

- Network 탭을 보면 특정 엔드포인트로 보낸 HTTP 요청을 볼 수 있습니다.

- 이 요청의 헤더를 보면 평문으로된 인증 토큰 값을 확인할 수 있습니다.

</details>

---
# 10주차

🔋 2023.11.02

<details><summary>💬 코드 구성과 데이터 불러오기 </summary>

- 아토믹 디자인 원칙에 따른 컴포넌트 구성

- 유틸리티 구성

- 정적 자원 구성

- 스타일 파일 구성

- lib 파일 구성

- 서버에서 REST API를 사용하는 방법

- 클라이언트에서 REST API를 사용하는 방법

- 클라이언트 및 서버에서 Apollo를 이용하여 GraphQL API를 사용하는 방법

</details>

<details><summary>🔥 디렉터리 구조 구성 </summary>

- Next.js에서는 특정 파일과 디렉터리가 지정된 위치에 있어야 합니다.

- _app.js나 _document.js 파일, pages/와 public/ 디렉터리 등이 그렇습니다.

- node_modules/: Next.js 프로젝트의 의존성 패키지를 설치하는 디렉터리

- pages/: 웹 애플리케이션의 페이지 파일을 저장하고 라우팅 시스템을 만드는 디렉터리

- public/: 컴파일된 CSS 및 자바스크립트 파일, 이미지, 아이콘 등의 정적 자원을 저장하고 제공하는 디렉터리

- styles/: 스타일링 포맷(CSS, SASS, LESS 등)과 관계없이 스타일링 모듈을 저장하는 디렉터리

</details>

<details><summary>🔥 컴포넌트 구성 </summary>

- 컴포넌트들을 세 가지로 분류하고 각 컴포넌트와 관련된 스타일 및 테스트 파일을 같은 곳에 두어야 합니다.

- 코드를 더 효율적으로 구성하기 위해 아토믹 디자인 원칙에 따라 각 컴포넌트를 서로 다른 수준의 디렉터리에 둡니다.

- 여기서는 컴포넌트를 다음과 같이 네 가지 종류로 나눕니다.

# atoms

- 코드에서 사용되는 가장 기본적인 컴포넌트들 입니다.

- button, input, p와 같은 표준 HTML 요소를 감싸는 용도로 사용되거나, 애니메이션 또는 컬러 팔레트 등과 같은 용도로 사용되는 컴포넌트를 이곳에 저장합니다.

# molecules

- atoms에 속한 컴포넌트 여러 개를 조합하여 좀 더 복잡한 구조를 만드는 컴포넌트들입니다.

- 유틸리티 기능들은 많이 사용되지 않습니다.

# organisms

- molecules와 atoms를 섞어서 더 복잡한 구조의 컴포넌트를 만듭니다.

# templates

- 일종의 페이지 스켈레톤으로, 어디에 organisms, atom, molecules를 배치할지 결정해서 사용자가 접근할 수 있는 페이지를 만듭니다.

</details>

<details><summary>🔥 유틸리티 구성 </summary>

- 컴포넌트를 만들지 않는 코드 파일도 있습니다.

- 이런 파일을 흔히 유틸리티 스크립트라고 하며, 다양한 목적으로 사용할 수 있습니다.

- 유틸리티 함수는 utility/ 디렉터리 아래에 저장하고, 함수 각각을 목적에 맞게 서로 다른 파일로 구분하는 것이 좋습니다.

- 유틸리티 함수들을 각각의 목적에 맞게 서로 다른 파일로 구분할 수 잇습니다.

- 이렇게 하면 개발할 때 필요한 유틸리티 함수를 불러와서 사용하기도 쉽습니다.

</details>

<details><summary>🔥 정적 자원 구성 </summary>

- Next.js에서는 정적 파일을 쉽게 제공할 수 있습니다.

- 제공할 파일을 public/ 디렉터리 아래에 두면 나머지는 프레임워크가 알아서 해주기 때문입니다.

- icons/ 디렉터리는 주로 웹 앱 매니페스트 아이콘을 제공할 용도로 사용됩니다.

- 웹 앱 매니페스트는 JSON 파일로, 앱의 이름이나 모바일 기기에 앱을 설치할 때 표시할 아이콘과 같이 프로그레시브 웹 앱에 관한 유용한 정보를 가지고 있습니다.

- 일반적인 웹 사이트에서는 다음과 같은 정적 자원을 사용합니다.

* 이미지

* 컴파일한 자바스크립트 파일

* 컴파일한 CSS 파일

* 아이콘(favicon 및 웹 앱 아이콘)

* manifest.json, robot.txt등의 정적 파일

</details>

<details><summary>🔥 스타일 파일 구성 </summary>

- 스타일 파일은 Next.js 애플리케이션에서 어떤 스타일 관련 기술을 사용하는가에 따라 그 구성이 달라집니다.

- CSS-in-JS 프레임워크의 경우 컴포넌트별로 스타일 파일을 만듭니다. 그래서 스타일을 변경하기도 쉽습니다.

</details>

<details><summary>🔥 lib 파일 구성 </summary>

- lib 파일은 서드파티 라이브러리를 감싸는 스크립트를 지칭하는 말입니다.

- 유틸리티 스크립트는 범용이기 때문에 컴포넌트나 라이브러리에서 가져다 쓸 수 있지만 lib 파일은 특정 라이브러리에 특화된 것입니다.

</details>

<details><summary>💬 데이터 불러오기 </summary>

- Next.js에서는 클라이언트와 서버 모두에서 데이터를 불러올 수 있습니다.

- 서버는 두 가지 상황에서 데이터를 불러올 수 있습니다.

- 정적 페이지를 만들 때 getStaticProps 함수를 사용해서 빌드 시점에 데이터를 불러올 수 있으며 서버가 페이지를 렌더링할때 getServerSideProps를 통해 실행 도중 데이터를 불러올 수도 있습니다.

- 애플리케이션은 데이터베이스, 검색 엔진, 외부 API, 파일시스템 등과 같이 수많은 외부 소스에서 데이터를 가져올 수 있습니다.

</details>

<details><summary>🔥 서버가 데이터 불러오기 </summary>

- Next.js에서는 서버가 내장 getStaticProps와 getServerSideProps 함수를 사용해서 데이터를 불러올 수 있습니다.

- Node.js는 웹 브라우저와 달리 자바스크립트 fetch API를 제공하지 않기 때문에 서버에서는 두 가지 방법으로 HTTP 요청을 만들고 처리할 수 있습니다.

- Node.js의 내장 HTTP 라이브러리를 사용할 수 있습니다.

- HTTP 클라이언트 라이브러리를 사용할 수 있습니다.

</details>

<details><summary>🔥 서버에서 REST API 사용하기 </summary>

- REST API를 호출할 때는 퍼블릭 API를 호출할 것인지 아니면 프라이빗 API를 호출할 것 인지를 먼저 알아야 합니다.

</details>

---
# 9주차

🔋 2023.10.26

<details><summary>💬 메타데이터 </summary>

- 페이스북의 오픈 그래프처럼 공유 자료를 카드 형태로 보내려면 몇가지 메타데이터를 추가해야 합니다.

- Next.js에서는 내장 Head 컴포넌트를 제공하여 이런 메타 데이터를 쉽게 다를 수 있습니다.

- 어떤 컴포넌트에서든 HTML 페이지의 <Head> 내부 데이터를 변경, 추가, 삭제 할 수 있습니다.

</details>

<details><summary>💬 페이지 커스터마이징 </summary>

- HTML을 클라이언트에 보내기 전에 특정 작업을 처리해야 하는 경우는 pages/ 디렉토리 안에 있는 _app.js와 _document.js 페이지를 이용합니다.

## _app.js

## _document.js

- Next 페이지에서는 <html>, <head>, <body>와 같은 기본적인 HTML 태그를 정의 할 필요가 없습니다.

- Head 컴포넌트에서 이 태그를 제공하고 있습니다.

- pages/_document.js 파일로 기능을 확장할 수 있습니다.

- NextScript는 리액트 하이드레이션과 같은 작업을 처리할 수 있는 커스텀 스크립트가 위치하는 곳 입니다.

- document.js는 페이지를 수정할 때 이 네가지를 반드시 불러와야 합니다.

</details>


---
# 중간고사

🔋 2023.10.19

<details><summary>💬 중간고사 </summary>

- 50분동안 시험 (1~2반 동시 시험)

- ChatGPT & 메신저 금지 (F처리)

- 코드 동작 하지않아도 작성 (부분점수 O)

- 오류 발생시 어떤 오류가 나는지 작성 및 해결방안 작성 (가점 O)

- 주석 작성 (가점 O)

- 배운 내용 중 출제

- 리액트 응용 가능성 다수

</details>

---
# 7주차

🔋 2023.10.12

<details><summary>💬 라우팅 시스템 </summary>

- React의 React Router, Reach Router 등은 클라이언트 라우팅만 구현할 수 있습니다.

- Next는 파일시스템 기반 페이지와 라우팅을 합니다.

- 페이지는 /pages 디렉토리 안의 *.js *.jsx *.ts *.tsx 파일에서 export한 React 컴포넌트 입니다.

* 일반적인 경로

- pages/index.js
-> localhost:3000/

- pages/blog/index.js
-> localhost:3000/blog

* 중첩라우팅

- pages/blog/first-post.js
-> localhost:3000/blog/first-post

- pages/dashboard/settings/username.js
-> localhost:3000/dashboard/settings/username

</details>

<details><summary>💬 동적 라우팅 </summary>

- /pages/posts/[slug].js 파일을 생성하고 다음과 같이 useRouter를 사용하면 파라미터를 사용할 수 있습니다.

- 대괄호는 반드시 사용해야 하고, slug는 pid, category 등 원하는 것을 넣으면 됩니다.

- useRouter 훅을 통해 해당 router 정보를 불러오거나, router.query 내에 설정한 변수와 변수 값을 확인 할 수있습니다.

- 동적인 라우팅 규칙을 만들려면 [slug].js 파일이 필요합니다.

- [slug].js는 매개 변수로 사용되며, 주소창에서 입력하는 값을 모두 받을 수 있습니다.

- 동적 라우팅 규칙을 중첩할 수도 있습니다.

- getServerSideProps와 getStaticProps 함수는 반드시 객체를 반환해야 합니다.

- 함수가 반환한 값을 페이지에서 사용할 때는 함수가 반환한 객체의 props 속성 값을 사용해야 합니다.

```tsx

impoer { useRouter } from 'next/router'

export default function Posts() {
  const router = useRouter();
  const { pid } = router.query;
  return <p>Post: {pid}</p>;
}

```

</details>

<details><summary>💬 동적 경로 매개 변수 </summary>

```js

<Link href='/blog/2023-10-12/happy-new-year'>Read post</Link>
<Link href='/blog/2023-10-12/match-update'>Read post</Link>
<Link href='/blog/2023-10-12/i-love-nextjs'>Read post</Link>

```

```js

<Link
  ref={{
    pathname: '/blog/[date]/[slug]'
    query: {
      date: '2023-10-12'
      slug: 'daelim'
      foo: 'bar'
    }
  }}
  >
  Read post
  </Link>

```

</details>

<details><summary>💬 router.push </summary>

- Link 컴포넌트 대신 useRouter Hook을 사용해서 다른 페이지로 이동할 수 있습니다.

- 로그인을 한 사용자만 접근할 수 있는 페이지를 위한 useAuth라는 훅이 있다고 가정합시다.

- 사용자가 로그인 하지 않았다면 useRouter 훅을 사용해서 로그인 페이지로 이동시킵니다.

- router.push 메서드를 사용해서 로그인 페이지로 이동

- Link 컴포넌트와는 다르게 연결된 페이지를 미리 불러오지 못합니다.

- 클라이언트에서 네비게이션 구현에 router.push를 사용하는 것은 추천하지 않습니다.

</details>

<details><summary>💬 정적 자원 제공 </summary>

- 정적 자원은 미지미, 폰트, 아이콘, 컴파일한 CSS 또는 JS 파일과 같이 동적으로 변하지 않는 모든 종류의 파일을 의미합니다.

- 이러한 정적 자원은 /public 디렉터리 안에 저장하는 방식으로 클라이언트에 쉽게 제공합니다.

- 정적 자원중 이미지 파일은 SEO에 많은 영향을 미칩니다.

- 불러오는데 많은 시간이 걸리고, 불러온 후에도 이미지 주변의 레이아웃이 변경되는 등 UX 관점에서 좋지 않은 영향을 줍니다.

- 이를 누적 레이아웃 이동 이라고 합니다.

- Image 컴포넌트를 사용해서 이와 같은 CLS 문제를 해결합니다.

</details>

<details><summary>💬 자동 이미지 최적화 </summary>

- Next.js 10부터는 Image 컴포넌트를 사용해서 이미지를 자동으로 최적화 할 수 있습니다.

- Next.js가 이 기능을 제공하기 전에는 외부 도구를 사용해서 모든 이미지를 최적화 하고 HTML의 모든 <img> 태그에 복잡한 srcset 속성값을 지정해서 화면 크기별로 이미지를 조정했습니다.

- 이미지 최적화 기능을 사용하면 이미지를 Webp와 같은 최신 이미지 포맷으로 제공할 수 있습니다.

- 최신 포맥을 지원하지 않는 브라우저의 경우에는 png나 jpeg와 같은 예전 이미지 포맷도 제공합니다.

- 필요한 경우 이미지 크기를 조정할 수도 있습니다.

- 특히 클라이언트가 이미지를 요구할 때 최적화 작업을 한다는 장점이 있습니다.

- 따라서 Unplash나 Pexel과 같은 외부 미이지 서비스로 이미지를 제공할 수 있습니다.

```js

module.exports = {
  images: {
    domains: ['images.unsplash.com']
  }
}

```

</details>

<details><summary>💬 layout 속성값 </summary>

- fixed : 이미지의 크기를 지정하면 화면의 크기와 상관 없이 이미지 크기를 유지합니다.

- responsive : HTML img 태그와 같습니다. 이미지 크기를 지정하면 더 크거나 작은 화면에서도 이미지 크기를 조절하지 않고 지정한 대로 유지합니다.

- intrinsic : fixed와 responsive를 절반씩 수용합니다. 크기가 작은 화면에서는 이미지 크기를 조절하지만 이미지 보다 큰 화면에서는 이미지 크기를 조절하지 않습니다.

- fill : 부모 요소의 가로와 세로 크기에 따라 이미지를 늘립니다. layout에 fill을 지정한 경우 width와 height 속성값을 함께 지정할 수 없습니다. fill을 사용하는 것과 width / height 속성을 지정하는 것중 하나만 가능합니다.

</details>

---
# 6주차

🔋 2023.10.05

![CSR](https://miro.medium.com/max/1400/0*IFMD2NrLWG7U-Ve5.png)

<details><summary>💬 클라이언트 사이드 렌더링(CSR) </summary>

- 표준 리액트 앱은 서버에서 자바스크립트 번들을 클라이언트로 전송한 다음 렌더링을 시작합니다.

- `create-react-app (CRA)`을 사용해봤다면 웹 앱이 렌더링을 시작하기 전에 웹 브라우저 화면이 텅텅 비어 있는 것을 본 적이 있을겁니다.

- 서버가 웹 애플리케이션이 필요로 하는 스크립트와 스타일만 포함된 기본 HTML 마크업만 전송하기 때문입니다.

- 실제 렌더링은 클라이언트로 전송한 웹 애플리케이션에서 이루어집니다.

*네이티브 애플리케이션처럼 느껴지는 웹 애플리케이션*

- 전체 자바스크립트 번들을 다운로드 한다는 것은 웹 애플리케이션이 렌더링 할 모든 페이지가 이미 브라우저에 다운로드 되어 있다는 뜻 입니다.

- 다른 페이지로 이동하면 서버에서 그 페이지에 해당하는 새로운 콘텐츠를 다운로드 하지 않고 그냥 페이지의 콘텐츠를 새로운 것으로 바꿉니다.

*쉬운 페이지 전환*

- 클라이언트에서 네비게이션은 브라우저 화면을 새로 고칠 필요 없이 다른 페이지로의 이동을 가능하게 만듭니다.

- 그래서 페이지 간 전환에 멋진 효과를 쉽게 넣을 수 있습니다.

*지연된 로딩과 성능*

- CSR을 사용하면 웹 앱에서는 최소로 필요한 HTML 마크업만 렌더링합니다.

- 사용자가 버튼을 클릭하면 보이는 모달의 경우 실제 HTML 페이지에서는 HTML 마크업으로 존재하지않습니다.

*서버 부하 감소*

- 전체 렌더링 과정이 브라우저에서 일어나기 때문에 서버가 할 일이라고는 아주 간단한 HTML페이지를 클라이언트에 전송하는 것 뿐입니다.

- 서버리스 환경에서 웹 앱을 제공할 수도 있습니다.

*서버리스*

- 개발자가 서버를 관리할 필요 없이 애플리케이션을 빌드하고 실행할 수 있도록 하는 클라우드 네이티브 개발 모델입니다.

## React.useEffect 훅

- 최근 리액트는 함수형 컴포넌트 사용을 강조하고 있으며, componentDidMount 대신 React.useEffect 훅을 사용해도 똑같은 기능을 구현할 수 있습니다.

## process.browser 변수

- 서버에서 렌더링할 때 브라우저 전용 API로 인한 문제를 다른 방법으로 해결 할 수도 있습니다.

- process.browser 값에 따라서 스크립트와 컴포넌트를 조건별로 실행하는 것입니다.

# 동적 컴포넌트 로딩

- `Next.js`는 리액트가 제공하지 않는 기능을 내장 컴포넌트와 유틸리티 함수 형태로 제공합니다.

- dynamic 함수로도 똑같이 동작하게 할 수있습니다.

- CSR은 동적 웹 페이지를 만들 때 SSR보다 더 좋은 선택이 될 수 있습니다.

- 검색 엔진에 노출 될 필요가 없는 페이지를 만드는 경우에는 웹 애플리케이션의 자바스크립트 코드를 먼저 다운로드 한 다음 클라이언트에서 필요한 데이터를 직접 가져가도록 만듭니다.

- 이렇게 하면 서버 부하를 줄이고 애플리케이션을 더 쉽게 확장할 수 있습니다.

</details>

<details><summary>💬 정적 사이트 생성(SSG) </summary>

- SSG는 일부 또는 전체 페이지를 빌드 시점에 미리 렌더링합니다.

- 웹 애플리케이션을 빌드할 때 내용이 거의 변하지 않는 페이지는 정적 페이지로 만들어서 제공하는 것이 더 좋습니다.

- 한 가지 문제점은 일단 웹 페이지를 만들고 나면 다음 배포 전까지 내용이 변하지 않는다는 것 입니다.

- 조금이라도 수정하려면 필요한 데이터를 가져와서 수정하고 다시 생성하는 과정을 반복해야 합니다.

- Next.js는 이런 페이지를 빌드 과정에서 정적 페이지로 미리 렌더링 해서 HTML 마크업 형태로 제공합니다.

- 리액트 하이드레이션 덕분에 이런 정적 페이지에서도 여전히 사용자와 웹 페이지 간의 상호 작용이 가능합니다.

- 만일 데이터가 자주 변하지 않는다면 SSG와 ISR을 사용해서 데이터를 10분동안 캐싱할 수 있습니다.

# 쉬운 확장

- 정적 페이지는 단순 HTML 파일이므로 CDN을 통해 파일을 제공하거나 캐시에 저장하기 쉽습니다.

- 직접 웹 서버에서 웹 애플리케이션을 제공하는 경우에도 정적 페이지는 별도의 연산 없이 정적 자원 형태로 제공되기 때문에 서버에 부하를 거의 주지 않습니다.

# 뛰어난 성능

- 빌드 시점에 HTMl 페이지를 미리 렌더링 하기 때문에 페이지를 요청해도 클라이언트나 서버가 무언가를 처리 할 필요가 없습니다.

- 웹 서버는 정적 파일을 보내기만 하고 클라이언트 브라우저는 파일을 받아서 표시만 하면 됩니다.

- 서버 쪽에 데이터를 요구하지도 않습니다.

# 더 안전한 API 요청

- 페이지 렌더링을 위해 웹 서버가 민감하고 중요한 데이터를 클라이언트로 보낼 필요가 없습니다.

- 외부 API를 호출하거나, 데이터베이스에 접근 하거나, 보호해야 할 데이터에 접근 할 일이 없습니다.

- 필요한 모든 정보가 빌드 시점에 미리 페이지로 렌더링 되어있기 때문입니다.

## SSG 사용 이유

- SEO: 검색 엔진 최적화는 크롤러가 페이지를 쉽게 인덱싱 할 수 있도록 하기 때문에 SSG를 수행하는 최고의 이점 중 하나입니다.

- 속도: 짐작할 수 있듯이 브라우저가 사전에 많은 처리를 하지 않아도 되기 때문에 HTML 페이지를 제공하는 것이 사용자에게 훨씬 더 빠른 속도를 제공합니다. 사전 렌더링을 통해 브라우저는 HTML을 쉽게 가져와 바로 렌더링 할 수 있습니다.

- CDN을 사용한 캐싱: HTML 페이지를 구축해놓으면, CDN 캐싱이 매력을 발휘할 수 있습니다. 페이지는 글로벌하게 사용자에게 더 가까이 저장되므로 훨씬 빠르게 엑세스할 수 있습니다. 모든 요청은 서버가 페이지를 렌더링할 때까지 기다릴 필요가 없으며 CDN에서 페이지를 수신하기만 하면 되기 때문에 계산 리소스와 비용을 절약할 수 있습니다.

</details>

<details><summary>💬 Next.js 기초와 내장 컴포넌트 </summary>

- Next는 서버사이드 렌더링 외에도 많은 내장 컴포넌트와 함수를 제공합니다.

- 3장에서 학습할 내용

1. 클라이언트와 서버에서의 라우팅 시스템 작동방식

2. 페이지 간 이동 최적화

3. Next.js가 정적 자원을 제공하는 방법

4. 자동 이미지 최적화와 새로운 Image 컴포넌트를 사용한 이미지 제공 최적화 기법

5. 컴포넌트에서 HTML 메타데이터를 처리하는 방법

6. _app.js와 _document.js 파일 내용 및 커스터마이징 방법

</details>

<details><summary>💬 라우팅 시스템 </summary>

- React의 React Router, Reach Router 등은 클라이언트 라우팅만 구현할 수 있습니다.

- Next는 파일시스템 기반 페이지와 라우팅을 합니다.

- 페이지는 /pages 디렉토리 안의 *.js *.jsx *.ts *.tsx 파일에서 export한 React 컴포넌트 입니다.

* 일반적인 경로

- pages/index.js
-> localhost:3000/

- pages/blog/index.js
-> localhost:3000/blog

* 중첩라우팅

- pages/blog/first-post.js
-> localhost:3000/blog/first-post

- pages/dashboard/settings/username.js
-> localhost:3000/dashboard/settings/username

</details>

<details><summary>💬 동적 라우팅 </summary>

- /pages/posts/[slug].js 파일을 생성하고 다음과 같이 useRouter를 사용하면 파라미터를 사용할 수 있습니다.

- 대괄호는 반드시 사용해야 하고, slug는 pid, category 등 원하는 것을 넣으면 됩니다.

- useRouter 훅을 통해 해당 router 정보를 불러오거나, router.query 내에 설정한 변수와 변수 값을 확인 할 수있습니다.

```tsx

impoer { useRouter } from 'next/router'

export default function Posts() {
  const router = useRouter();
  const { pid } = router.query;
  return <p>Post: {pid}</p>;
}

```

</details>

---
# 3주차

🔋 2023.09.14

<details><summary>💬 몇가지 발생할 수 있는 오류 </summary>

- 처음 Next 프로젝트 생성시 오류로 생성이 안될수도 있음

* 이는 CRA가 설치되어 있지 않아서 생기는 현상

* 이럴 경우에는 create-react-app을 Global로 설치

`npm i -g create-react-app`

`npx create-next-app`

- Next.js 12 이후 babel을 지원하지 않게 되었습니다.

- 이제는 SWC로 그 기능이 대체되었으므로, 최신환경에서 babel 설정을 하게되면 오류가 발생

- 만일 SWC를 사용하고 싶다면 다음과 같이 12 혹은 최신 버전의 Next 프로젝트를 생성해주면 자동으로 설정

`npx create-next-app@12`

`npx create-next-app@latest`

</details>

<details><summary>💬 Transpile </summary>

- babel은 ECMAScript와 같은 자바스크립트 최신 버전이나, TypeScript를 이전 버전의 코드로 변환시켜주는 Transpile 도구입니다.

- 개발자가 작성한 코드 -> Parse -> Transform -> Generate -> 이전 버전의 코드

- babel의 parse는 자바스크립트를 컴퓨터가 이해할 수 있는 코드 구조인 Abstract Syntax Tree(AST)로 변환해주는 역할을 수행합니다.

- babel의 traverse 모듈은 전체 트리 상태를 유지하며 노드 교체, 제거, 추가를 담당합니다.

- 마지막 generator가 수정된 AST를 일반 코드로 변환 해 주게 됩니다.

- SWC도 babel과 같은 자바스크립트 트랜스 컴파일러 입니다.

- Next 12 이후 부터 babel에서 SWC로 교체 되었습니다.

- SWC는 Rust로 작성되어 있어 babel에 비해 속도가 훨씬 빠릅니다.

</details>

<details><summary>💬 Babel의 단점 </summary>

- babel로 변환된 코드를 이해하기 어렵다.

- 원 코드에 비해 변환 코드의 길이가 늘어난다.

- 변환에 시간이 많이 걸린다.

</details>

<details><summary>💬 SWC의 장점 </summary>

- Next 12 이후 별도의 설정 없이 SWC를 사용할 수 있다.

- Next.js에 내장되어 있다.

- Rust의 WASM 지원으로 어떤 종류의 플랫폼에서도 Next.js를 개발 할 수 있다.

- 변환시간이 빠르다.

- 커뮤니티가 빠르게 성장하고 있어 도움 받기가 쉽다.

</details>

<details><summary>💬 렌더링 전략 </summary>

- 렌더링 전략이란 웹  페이지 또는 웹 애플리케이션을 웹 브라우저에 제공하는 방법을 의미합니다.

- Gatsby와 같은 프레임워크는 정적으로 생성한 페이지를 제공하기에 안성맞춤입니다.

- 다른 프레임워크들은 서버에서 렌더링한 페이지를 만들고 제공하기에 좋습니다.

- Next.js에서는 이 모든 방법을 완전히 새로운 수준으로 제공합니다.

- 어떤 페이지는 빌드 시점에 정적으로 생성하고, 어떤 페이지는 실행 시점에 동적으로 생성할지 쉽게 정할 수 있습니다.

- 또한 특정 페이지에 대한 요청이 있을 때마다 페이지를 다시 생성할 수도 있습니다.

- 그리고 반드시 클라이언트에서 렌더링해야 할 컴포넌트도 지정할 수 있어서 개발이 쉽습니다.

</details>

<details><summary>💬 서버 사이드 렌더링(SSR) </summary>

- `서버 사이드 렌더링`이 생소할 수도 있지만 사실 SSR은 웹 페이지를 제공하는 가장 흔한 방법입니다. 

- `APM`을 이용하는 일반적인 웹 페이지 생성이라고 보면 됩니다.

- PHP, 루비, 파이썬과 같은 언어의 경우에는 HTML 페이지를 웹 브라우저로 전송하기 전에 서버에서 전부 렌더링 합니다.

- 해당 페이지의 모든 자바스크립트 코드가 적재되면 동적으로 페이지 내용을 렌더링합니다.

- 서버에서 렌더링한 페이지에 스크립트 코드를 집어 넣어서 나중에 웹 페이지를 동적으로 처리할 수도 있는데 이를 `하이드레이션` 이라고 합니다.

- 리액트 하이드레이션 덕분에 이 상태에서 웹 앱은 `싱글 페이지 애플리케이션` 처럼 작동할 수 있습니다.

- `클라이언트 사이드 렌더링`과 SSR의 장점을 모두 가지는 것이죠

- *더 안전한 웹 애플리케이션*

- 페이지를 서버에서 렌더링 한다는 것은 쿠키 관리, 주요 API, 데이터 검증 등과 같은 작업을 서버에서 처리한다는 뜻이며, 중요한 데이터를 클라이언트에 노출할 필요가 없기 때문에 더 안전합니다.

- *더 뛰어난 웹 사이트 호환성*

- 클라이언트 환경이 자바스크립트를 사용하지 못하거나 오래된 브라우저를 사용하더라도 웹 페이지를 제공할 수 있습니다.

- *더 뛰어난 SEO*

- 클라이언트에서 서버가 렌더링한 HTML 콘텐츠를 받기 때문에 봇이나 웹 크롤러 같은 검색 엔진 웹 문서 수집기가 페이지를 렌더링 할 필요가 없습니다.

- 그 결과로 웹 애플리케이션의 SEO 점수가 높아집니다.

```tsx

function IndexPage() {
  return <div>This is the index page.</div>
}

```

```tsx

export async function getServerSideProps() {
  const useRequest = await fetch('https://api.github.com/repos/vercel/next.js');
  const userData = await userRequest.json();

  return{
    props: {
      user: userData,
    },
  };
}

function IndexPage(props) {
  return <div>Welcome, {props.user.name}!</div>
}

export default IndexPage;

```

- SSR을 사용하면 클라이언트가 요청할 때마다 페이지를 다시 렌더링 할 수 있는 서버가 필요합니다.

- 웹 앱을 서버에 배포한다면 다른 방식보다 SSR 애플리케이션이 더 많은 자원을 소모하고 더 많은 부하를 보이며 유지 보수 비용도 증가합니다.

- SSR을 사용할 경우 페이지에 대한 요청을 처리하는 시간이 길어진다는 점도 알아두어야 합니다.

- 페이지가 외부 API 또는 데이터 소스에 접근해야 한다면 해당 페이지를 렌더링할 때마다 API나 데이터 소스를 다시 요청하게 됩니다.

- 서버에서 렌더링한 페이지 간의 이동은 클라이언트에서 렌더링한 페이지 혹은 정적으로 생성한 페이지 간의 이동보다 느립니다.

- 항상 염두해 둘 점은 Next.js가 기본적으로 빌드 시점에 정적으로 페이지를 만든다는 점 입니다.

- SSR은 이점이 많지만 주의해야 할 점도 있습니다.

- 브라우저 전용 API를 사용해야 하는 컴포넌트가 있다면 해당 컴포넌트를 반드시 브라우저에서 렌더링하도록 명시적으로 지정해야 합니다.

- Next.js는 페이지를 기본적으로 서버에서 렌더링하기 때문에 window, document와 같은 객체나 API를 제공하지 않습니다.

- 이런 부분에서는 CSR이 필요합니다.

</details>

<details><summary>💬 클라이언트 사이드 렌더링(CSR) </summary>

- 표준 리액트 앱은 서버에서 자바스크립트 번들을 클라이언트로 전송한 다음 렌더링을 시작합니다.

- `create-react-app (CRA)`을 사용해봤다면 웹 앱이 렌더링을 시작하기 전에 웹 브라우저 화면이 텅텅 비어 있는 것을 본 적이 있을겁니다.

- 서버가 웹 애플리케이션이 필요로 하는 스크립트와 스타일만 포함된 기본 HTML 마크업만 전송하기 때문입니다.

- 실제 렌더링은 클라이언트로 전송한 웹 애플리케이션에서 이루어집니다.

*네이티브 애플리케이션처럼 느껴지는 웹 애플리케이션*

- 전체 자바스크립트 번들을 다운로드 한다는 것은 웹 애플리케이션이 렌더링 할 모든 페이지가 이미 브라우저에 다운로드 되어 있다는 뜻 입니다.

- 다른 페이지로 이동하면 서버에서 그 페이지에 해당하는 새로운 콘텐츠를 다운로드 하지 않고 그냥 페이지의 콘텐츠를 새로운 것으로 바꿉니다.

*쉬운 페이지 전환*

- 클라이언트에서 네비게이션은 브라우저 화면을 새로 고칠 필요 없이 다른 페이지로의 이동을 가능하게 만듭니다.

- 그래서 페이지 간 전환에 멋진 효과를 쉽게 넣을 수 있습니다.

*지연된 로딩과 성능*

- CSR을 사용하면 웹 앱에서는 최소로 필요한 HTML 마크업만 렌더링합니다.

- 사용자가 버튼을 클릭하면 보이는 모달의 경우 실제 HTML 페이지에서는 HTML 마크업으로 존재하지않습니다.

*서버 부하 감소*

- 전체 렌더링 과정이 브라우저에서 일어나기 때문에 서버가 할 일이라고는 아주 간단한 HTML페이지를 클라이언트에 전송하는 것 뿐입니다.

- 서버리스 환경에서 웹 앱을 제공할 수도 있습니다.

*서버리스*

- 개발자가 서버를 관리할 필요 없이 애플리케이션을 빌드하고 실행할 수 있도록 하는 클라우드 네이티브 개발 모델입니다.

## React.useEffect 훅

- 최근 리액트는 함수형 컴포넌트 사용을 강조하고 있으며, componentDidMount 대신 React.useEffect 훅을 사용해도 똑같은 기능을 구현할 수 있습니다.

## process.browser 변수

- 서버에서 렌더링할 때 브라우저 전용 API로 인한 문제를 다른 방법으로 해결 할 수도 있습니다.

- process.browser 값에 따라서 스크립트와 컴포넌트를 조건별로 실행하는 것입니다.

# 동적 컴포넌트 로딩

- `Next.js`는 리액트가 제공하지 않는 기능을 내장 컴포넌트와 유틸리티 함수 형태로 제공합니다.

- dynamic 함수로도 똑같이 동작하게 할 수있습니다.

- CSR은 동적 웹 페이지를 만들 때 SSR보다 더 좋은 선택이 될 수 있습니다.

- 검색 엔진에 노출 될 필요가 없는 페이지를 만드는 경우에는 웹 애플리케이션의 자바스크립트 코드를 먼저 다운로드 한 다음 클라이언트에서 필요한 데이터를 직접 가져가도록 만듭니다.

- 이렇게 하면 서버 부하를 줄이고 애플리케이션을 더 쉽게 확장할 수 있습니다.

</details>

<details><summary>💬 정적 사이트 생성(SSG) </summary>

- SSG는 일부 또는 전체 페이지를 빌드 시점에 미리 렌더링합니다.

- 웹 애플리케이션을 빌드할 때 내용이 거의 변하지 않는 페이지는 정적 페이지로 만들어서 제공하는 것이 더 좋습니다.

- Next.js는 이런 페이지를 빌드 과정에서 정적 페이지로 미리 렌더링 해서 HTML 마크업 형태로 제공합니다.

- 리액트 하이드레이션 덕분에 이런 정적 페이지에서도 여전히 사용자와 웹 페이지 간의 상호 작용이 가능합니다.

# 쉬운 확장

- 정적 페이지는 단순 HTML 파일이므로 CDN을 통해 파일을 제공하거나 캐시에 저장하기 쉽습니다.

- 직접 웹 서버에서 웹 애플리케이션을 제공하는 경우에도 정적 페이지는 별도의 연산 없이 정적 자원 형태로 제공되기 때문에 서버에 부하를 거의 주지 않습니다.

# 뛰어난 성능

- 

</details>

---
# 2주차

🔋 2023.09.07

<details><summary>💬 프로젝트 기본 구조 </summary>

- Next.js는 네비게이션을 구현할 때 react-router와 같은 라이브러리를 사용하지 않고, page/ 디렉토리를 사용합니다.

- pages/ 디렉토리 안의 모든 js 파일은 public 페이지가 됩니다.

- pages/ 의 index.js 파일을 복사해서, about.js로 이름을 바꾸면, ~~ 으로 접속할 수 있습니다.

- public/ 디렉토리에는 웹 사이트의 모든 퍼블릭 페이지와 정적 콘텐츠가 있습니다.

- styles/ 디렉토리에는 앱에서 사용하는 스타일시트를 넣습니다.

- 용도가 정해져 있는 디렉토리는 pages/와 public/ 뿐입니다.

- 나머지 디렉토리는 필요에 따라서 다른 목적으로 사용하거나 삭제해도 됩니다.

</details>

<details><summary>💬 타입스크립트 지원 </summary>

- Next.js는 타입스크립트로 작성된 프레임워크라서 태생적으로 고품질의 타입 정의를 지원합니다.

- tsconfig.json 파일은 아무 내용도 없는 빈 파일이지만 패키지들을 설치하고 나면 Next.js는 기본 설정 내용을 이 파일에 기록합니다.

- 필요한 경우 이 파일의 내용을 수정해서 타입스크립트 설정을 바꿀수 있지만 Next.js가 바벨의 `@babel/plugin-transform-typescript`를 사용하여 설정 파일을 관리하기 때문에 다음 주의사항을 숙지해야 합니다.

`@babel/plugin-transform-typescript 플러그인은 타입스크립트에서 자주 사용하는 const enum을 지원하지 않습니다. const enum을 사용하고 싶다면 바벨 설정에 babel-plugin-const-enum을 추가해야 합니다.`

`export =와 import = 구문은 사용할 수 없습니다. 두 가지 모두 ECMAScript 코드로 컴파일할 수 없기 때문입니다. babel-plugin-replacets-export-assignment를 설치하거나 import x, {y} from 'same-package' 또는 export default x와 같은 올바른 ECMAScript 구문으로 바꾸어야 합니다.`

- Next.js는 프로젝트 최상위 디렉터리에 next-env.d.ts 파일도 만듭니다.

- 이 파일은 마음대로 수정해도 되지만 지워서는 안됩니다.

</details>

---
# 1주차

🔋 2023.08.31

<details><summary>💬 Next.js 설치하기 </summary>

`npx create-next-app <app-name>`
- 필요한 의존성 패키지들이 설치되고 몇 개의 기본 페이지 생성

`npx create-next-app <app-name> --use-npm`
- Next.js Github 저장소에서 원하는 보일러플레이트 코드를 다운로드해서 세 Next.js 프로젝트를 시작

`npx create-next-app <app-name> --example with-docker`
- 웹사이트에서 코드를 다운로드 한 다음 필요한 의존성 패키지들을 설치
- 다운로드 한 파일을 수정하거나 커스터마이징하는 방법으로 개발 시작 가능

</details>

<details><summary>💬 Next.js란? </summary>

  * 리액트의 가장 큰 문제점인 기본적으로 클라이언트 사이드에서만 작동한다는 문제를 해결하기 위해 많은 개발자들이 웹 애플리케이션을 서버에서 미리 렌더링해두는 방법을 연구하기 시작했습니다.

  * 서버 사이드 렌더링을 사용할 수 있다면 리액트 앱을 순수한 HTML 페이지로 미리 렌더링해둔 다음 브라우저가 이를 다운로드하여 즉각 화면에 표시하고, 클라이언트에서 자바스크립트 번들을 다 받으면 사용자가 우베 앱과 상호작용을 할 수 있게 됩니다.

  * 이러한 연구 결과로 Vercel이 Next.js를 만들었습니다.

  * Next.js는 첫 릴리스부터 리액트가 제공하지 않는 다양한 기능을 제공하면서 리액트 웹 앱 개발 분야의 판도를 뒤흔들어 놓았습니다.

  * Next.js는 다음과 같은 기능을 제공합니다.

  - 정적 사이트 생성

  - 증분 정적 콘텐츠 생성

  - 타입스크립트에 대한 기본 지원

  - 자동 폴리필 사용

  - 이미지 최적화

  - 웹 애플리케이션의 국제화 지원

  - 성능 분석

</details>

<details><summary>💬 Next.js와 비슷한 프레임 워크 </summary>

  * `Gatsby`

  * Gatsby는 Next.js대신 사용할 수 있는 유명한 프레임워크입니다.

  * 특히 정적 웹 사이트를 만들 수 있는 프레임워크를 찾는다면 더할 나위없이 좋은 선택 입니다.

  * Next.js와 달리 Gatsby는 정적 사이트 생성만 지원합니다.

  * 모든 페이지를 빌드 시점에 미리 렌더링해서 정적 콘텐츠 형태로 만들기 때문에 어떤 콘텐츠 전송 네트워크로도 제공할 수 있습니다.

  * 데이터에 따라 동적으로 변하는 복잡한 웹 사이트는 만들 수 없습니다.

  * `Razzle`

  * Razzle은 Next.js만큼 유명하지는 않지만 서버 사이드 렌더링이 가능한 자바스크립트 애플리케이션을 만들 수 있습니다.

  * Razzle의 핵심은 create-react-app 도구를 쉽게 사용하면서도 서버와 클라이언트의 복잡한 애플리케이션 설정들을 추상화하고 단순하게 만들 수 있다는 점 입니다.

  * Next.js나 다른 프레임워크 대신 Razzle을 썼을 떄의 가장 큰 장점은 사용할 프레임워크에 대한 지식이 없어도 된다는 점 입니다.

  * `Nuxt.js`

  * 뷰를 사용한 웹 애플리케이션 개발에서 리액트의 Next.js에 해당하는 것은 Nuxt.js입니다.

  * 서버 사이드 렌더링, 정적 사이트 생성, 프로그레시브 웹 앱관리 등과 같은 기능을 제공하면서도 성능, SEO, 개발 속도 등에서 별다른 차이가 나지 않습니다.

  * Nuxt.js나 Next.js 모두 같은 목표를 갖는 프레임워크지만 Nuxt.js는 좀 더 많은 설정을 필요로 합니다.

  * Nuxt.js 설정 파일에서는 레이아웃, 전역 플러그인과 컴포넌트, 라우트 등을 지정할 수 있습니다.

  * `Angular Universal`

  * 앵귤러는 서버에서 자바스크립트 코드를 실행하고 렌더링 하는 기능을 제공하고자 Angular Universal을 세상에 선보였습니다.

  * 정적 사이트 생성과 서버 사이드 렌더링을 지원하지만 Nuxt.js나 Next.js와 다른 점은 가장 큰 소프트웨어 회사인 구글에서 만들었다는 점 입니다.

</details>