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