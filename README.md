[![Since](https://img.shields.io/badge/since-2023.08.31-333333.svg?style=flat-square)](https://github.com/Brem0827/Tech-Stack)
[![author](https://img.shields.io/badge/author-Brem0827-0066FF.svg?style=flat-square)](https://github.com/Brem0827/Tech-Stack)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#Tech-Stack)

[![Watch on GitHub](https://img.shields.io/github/watchers/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/stargazers)
[![Fork on GitHub](https://img.shields.io/github/forks/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/network/members)

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
4. 💭[5주차](#5주차)➡️
5. 💭[6주차](#6주차)➡️
6. 💭[중간고사](#중간고사)➡️
7. 💭[7주차](#7주차)➡️

---
# 7주차

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
# 6주차

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
# 5주차

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