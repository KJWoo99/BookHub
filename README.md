# Book Hub

당신이 원하는 책들을 한 곳으로, 한 눈에. **Book Hub**는 사용자가 다양한 도서관에서 원하는 책을 검색하고, AI를 통해 사용자 편의성을 극대화하는 웹 애플리케이션입니다.

![Platform](https://img.shields.io/badge/platform-web-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
## 주요 기능

### 1. 로그인 페이지
사용자는 아이디와 비밀번호를 입력하여 Book Hub에 로그인할 수 있습니다. 계정이 없는 경우 회원가입 기능을 통해 계정을 생성할 수 있습니다.

![image](https://github.com/user-attachments/assets/dbccc93f-f268-4531-9c39-c388ad6b5522)

<details>
  <summary>주요 기능 자세히 보기</summary>

  ### 2. AI 기반 도서 추천 및 요약
  Book Hub는 AI를 활용하여 사용자가 입력한 키워드에 맞는 도서를 추천하고, 해당 도서의 요약을 제공합니다.

  ![image](https://github.com/user-attachments/assets/093bf5f8-30cf-44a6-a13f-22af9841d9d0)

  ### 3. 최근 들어온 책 및 인기 있는 책
  Book Hub는 최근 도서관에 들어온 책과 현재 인기 있는 책을 목록으로 제공합니다. 사용자는 이 목록을 통해 최신 도서와 대중적인 도서를 쉽게 확인할 수 있습니다.

  ![image](https://github.com/user-attachments/assets/de86651e-918c-41c5-9a22-12c55c921df2)
  ![image](https://github.com/user-attachments/assets/18ddd00c-26dd-46f3-ac0d-1a4c5553dc47)

  ### 4. 도서 세부 정보
  특정 도서에 대한 자세한 정보를 제공하며, 도서관별 대출 가능 여부를 확인할 수 있습니다. 사용자는 검색한 도서의 위치와 대출 가능 여부를 쉽게 파악할 수 있습니다.

  ![image](https://github.com/user-attachments/assets/d44341ea-d64d-4190-88f4-0113a8f20ad5)

  ### 5. 마이페이지
  마이페이지에서는 사용자의 개인정보를 관리하고, 최근에 본 책들을 확인할 수 있습니다. 사용자는 이곳에서 개인정보를 수정하고, 본인의 독서 기록을 관리할 수 있습니다.

  ![image](https://github.com/user-attachments/assets/7b9fa1a0-3a25-482d-a9ee-b27a68e023b0)

  ### 6. 정보 수정
  마이페이지에서 사용자는 자신의 이메일, 전화번호, 주소 등을 수정할 수 있습니다. 이를 통해 개인정보를 항상 최신 상태로 유지할 수 있습니다.

  ![image](https://github.com/user-attachments/assets/38623ea0-5feb-4569-84cd-ccad59dca583)

</details>

## Table of Contents
- [소개](#소개)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [설치](#설치)
- [사용법](#사용법)
- [기여](#기여)
- [라이선스](#라이선스)
- [연락처](#연락처)

## 소개
Book Hub는 서울시 내 주요 구립 도서관(강남구, 강동구, 마포구, 영등포구)의 도서를 한 번에 검색할 수 있는 웹 플랫폼입니다. 사용자는 원하는 책을 검색하고, AI 기능을 활용해 책에 대한 요약과 추천을 받을 수 있습니다. 또한, 마이페이지에서 최근 검색한 책들을 확인할 수 있습니다.

## 기술 스택
Book Hub는 다음과 같은 기술 스택을 사용하여 개발되었습니다:

### 프론트엔드
- **HTML**: 웹 페이지의 구조를 정의합니다.
- **CSS**: 웹 페이지의 스타일을 지정하여 사용자 경험을 개선합니다.

### 백엔드
- **Node.js**: 서버 측 로직을 처리하며, 빠르고 확장 가능한 네트워크 애플리케이션을 구축하는 데 사용됩니다.

### 데이터베이스
- **MongoDB**: 도서 정보 및 사용자 데이터를 저장하기 위한 NoSQL 데이터베이스입니다.

## 주요 기능
- **도서 검색**: 사용자는 원하는 책을 검색하여 여러 도서관에서 해당 책의 소장 여부를 확인할 수 있습니다.
- **AI 기반 책 요약**: 입력된 키워드를 바탕으로 AI가 추천 도서의 요약을 제공합니다.
- **최근 본 책 기록**: 사용자가 최근에 검색한 책들은 마이페이지에 자동으로 기록됩니다.
- **도서 세부 정보**: 검색한 책의 세부 정보를 확인할 수 있으며, 도서관별 대출 가능 여부를 알 수 있습니다.
- **사용자 정보 관리**: 사용자는 자신의 이메일, 전화번호, 주소 등을 마이페이지에서 관리할 수 있습니다.

## 설치
Book Hub를 로컬에서 실행하기 위해 다음의 단계를 따르세요.

```bash
# 1. Repository를 클론합니다.
git clone https://github.com/yourusername/book-hub.git

# 2. 프로젝트 디렉토리로 이동합니다.
cd book-hub

# 3. 필요한 패키지를 설치합니다.
npm install

# 4. 애플리케이션을 실행합니다.
npm start
