# ⚽ 공찰까 (Gongchalkka) - 프론트엔드

> **누구나 쉽게 풋살 매치를 찾고 참여할 수 있는 풋살장 예약 및 소셜 매칭 서비스입니다.**

## 📌 프로젝트 개요
'공찰까' 프론트엔드는 실시간 매치 정보와 구장 데이터를 제공하며, 직관적인 인터페이스를 통해 편리한 풋살 매칭 서비스를 제공합니다.

## 🛠 기술 스택 (Tech Stack)
안정성과 빠른 개발 속도를 고려하여 최신 모던 프론트엔드 생태계를 구성했습니다.

* **프레임워크:** Vue 3 (Composition API) + Vite
* **언어:** JavaScript (ES6+)
* **스타일링:** Tailwind CSS + PostCSS
* **상태관리:** Pinia
* **라우팅:** Vue Router 4
* **HTTP 통신:** Axios

## ✨ 주요 기능 (Features)
<!-- * **🏟️ 풋살장(Field) 조회:** 등록된 풋살장 목록 및 기본 정보 조회 -->
* **⚽ 매치(Match) 탐색:** 날짜/시간별 모집 중인 풋살 매치 목록 확인
* **📄 매치 상세 조회:** 매치별 시간, 구장 위치, 주최자, 참여 인원 현황 확인
* **➡️ 매치 참가 및 생성:** 등록된 매치 참가, 새로운 매치 생성 기능

## 📂 폴더 구조 (Directory Structure)
```text
src/
├── api/            # 백엔드 API 통신 함수 및 Axios 설정 (Axios, Mapper)
├── assets/         # 정적 자원 및 전역 스타일시트 (main.css)
├── components/     # UI 컴포넌트
├── router/         # Vue Router 페이지 라우팅 설정
├── stores/         # Pinia 전역 상태 관리 (Auth 등)
└── views/          # URL 경로와 매핑되는 전체 화면(Page) 컴포넌트
