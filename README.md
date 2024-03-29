# clab.page

경기대학교 개발보안동아리 [C-Lab](https://www.clab.page/)의 공식 프론트엔드 시스템이에요.  
지속적으로 늘어나는 프론트엔드 프로젝트를 유연하고 생산성 있게 관리하기 위해 [모노레포(Monorepo)](https://en.wikipedia.org/wiki/Monorepo) 환경으로 만들어졌어요.

해당 프로젝트는 단순히 C-Lab 동아리 내에서 사용할 목적으로 시작되었지만, 그 취지와 목표는 훨씬 더 넓고 깊은 의미를 지니고 있어요.  
동아리나 모임, 그리고 **다양한 단체들이 운영과정에서 마주할 수 있는 다양한 문제점을 해결하고자 기획**하게 되었어요. `소통의 어려움`, `자료 공유의 번거로움`, `활동 계획의 비효율성` 그리고 `동아리 활동의 기록과 회고` 등 문제를 해결하고자 하며 결과적으로는 **모든 구성원이 만족하고 몰입할 수 있는 활동 환경을 조성**하는 것을 궁극적인 목표로 하고 있어요.

## Features

> 해당 모노레포에 있는 모든 프로젝트는 다음과 같은 특징을 가지고 있어요.

- 모든 디자인은 `Mobile First Design`로 제작되었어요.
-  일관된 사용자 경험을 제공하기 위해 자체 개발 `design-system`을 사용하고 있어요.

## Apps

![clab page](https://github.com/KGU-C-Lab/clab.page/assets/39869096/2611c6e1-6b42-45aa-9489-7a92c5a18ec7)

- [auth](/apps/auth/README.md): 동아리 계정을 OAuth 프로토콜을 기반으로 다양한 서비스에서 이용할 수 있는 통합 인증 시스템이에요.
- [land](/apps/land/README.md): 동아리의 소개, 활동, 뉴스 등 다양한 정보를 공유하는 랜딩 페이지이에요.
- [member](/apps/member/README.md): 동아리원의 활동과 커뮤니케이션을 지원하는 그룹웨어 시스템이에요.

## Packages

- [config](/packages/config/README.md): 프로젝트 설정 파일의 일관성을 유지하기 위한 라이브러리에요.
- [design-system](/packages/design-system/README.md): 일관성 있는 UI&UX를 위한 디자인 시스템이에요.
- [utils](/packages/utils/README.md): 공통적으로 사용하는 유틸리티 라이브러리에요.
- [hooks](/packages/hooks/README.md): 공통적으로 사용하는 React Hooks 라이브러리에요.
- [icon](/packages/icon/README.md): 공통적으로 사용하는 아이콘팩이에요.

## Server

> Server, Infra, Back-end에 대한 정보는 다른 저장소에서 확인할 수 있어요.

- [clab-server](https://github.com/KGU-C-Lab/clab-server): 경기대학교 개발보안동아리 C-Lab의 공식 백엔드 시스템이에요.

## Contributing

동아리원이 아니더라도 누구나 기여할 수 있습니다. 해당 프로젝트에 기여하고 싶다면 아래 문서를 참고해주세요.  
[CONTRIBUTING.md](CONTRIBUTING.md)

## FAQs

<details>
  <summary>해당 시스템을 자유롭게 사용해도 되나요?</summary>
  네, 가능합니다! 이 프로젝트는 GNU 라이센스 하에 배포되어 있으며, 라이센스 조건에 따라 자유롭게 사용하실 수 있습니다.
</details>

<details>
  <summary>시스템에서 오류를 발견했어요. 어떻게 해야 하나요?</summary>
  모든 사용자의 기여를 환영합니다! 버그를 발견하셨거나 프로젝트에 기여하고 싶으신 경우, 프로젝트의 <code>Contributing</code> 섹션을 확인해주세요.
</details>

<details>
  <summary>기타 문의 사항이 있어요. 어디서 할 수 있나요?</summary>
  Github에 기재된 <code>EMail</code>에 문의 남겨주시거나 [공식 홈페이지](https://www.clab.page/) <code>라이브챗(채널톡)</code>을 이용해주세요.
</details>

## License

C-Lab의 모든 공개 프로젝트는 [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html)의 라이선스를 따라요.  
자세한 사항은 `LICENSE`를 참고하세요.

**© Kyonggi University C-Lab**
