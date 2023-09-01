[![Since](https://img.shields.io/badge/since-2023.08.31-333333.svg?style=flat-square)](https://github.com/Brem0827/Tech-Stack)
[![author](https://img.shields.io/badge/author-Brem0827-0066FF.svg?style=flat-square)](https://github.com/Brem0827/Tech-Stack)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#Tech-Stack)

[![Watch on GitHub](https://img.shields.io/github/watchers/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/stargazers)
[![Fork on GitHub](https://img.shields.io/github/forks/Brem0827/Tech-Stack.svg?style=social)](https://github.com/Brem0827/Tech-Stack/network/members)

# 🏃Next.js
📔 201930324 이현종

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

<details><summary>📖 Next.js란? </summary>

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

<details><summary>📖 Next.js와 비슷한 프레임 워크 </summary>

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

<details><summary>💬 타입스크립트 지원 </summary>

- Next.js는 타입스크립트로 작성된 프레임워크라서 태생적으로 고품질의 타입 정의를 지원합니다.

- tsconfig.json 파일은 아무 내용도 없는 빈 파일이지만 패키지들을 설치하고 나면 Next.js는 기본 설정 내용을 이 파일에 기록합니다.

- 필요한 경우 이 파일의 내용을 수정해서 타입스크립트 설정을 바꿀수 있지만 Next.js가 바벨의 `@babel/plugin-transform-typescript`를 사용하여 설정 파일을 관리하기 때문에 다음 주의사항을 숙지해야 합니다.

`@babel/plugin-transform-typescript 플러그인은 타입스크립트에서 자주 사용하는 const enum을 지원하지 않습니다. const enum을 사용하고 싶다면 바벨 설정에 babel-plugin-const-enum을 추가해야 합니다.`

`export =와 import = 구문은 사용할 수 없습니다. 두 가지 모두 ECMAScript 코드로 컴파일할 수 없기 때문입니다. babel-plugin-replacets-export-assignment를 설치하거나 import x, {y} from 'same-package' 또는 export default x와 같은 올바른 ECMAScript 구문으로 바꾸어야 합니다.`

- Next.js는 프로젝트 최상위 디렉터리에 next-env.d.ts 파일도 만듭니다.

- 이 파일은 마음대로 수정해도 되지만 지워서는 안됩니다.

</details>

<details><summary>💬 바벨과 웹팩 설정 커스터마이징 </summary>

- 타입스크립트 설정 부분에서도 설명 했듯이 `바벨`이나 `웹팩`설정을 커스터마이징 할 수 있습니다.

- 바벨 설정을 커스터마이징하는 이유는 여러 가지입니다.

- 바벨은 자바스크립트 트랜스컴파일러이며, 최신 자바스크립트 코드를 하위 호환성을 보장하는 스크립트 코드로 변환하는 일을 주로 담당합니다.

- 하위 호환성이 보장된다면 어떤 웹 브라우저에서든 자바스크립트 코드를 실행할 수 있습니다.



</details>