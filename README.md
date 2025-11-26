# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>

# 📘 LX2 매뉴얼 배포 & Apache 설정 전체 가이드

이 문서는 Obsidian 기반 LX2 매뉴얼을 Quartz로 변환한 뒤  
서버(`/data/lx2/manual`)에 배포하고 Apache 설정을 적용하는 전체 작업 절차를 정리한 가이드입니다.

---

## 🔄 1. 매뉴얼 변환 (Quartz Build)

로컬에서 Quartz 정적 사이트로 변환합니다.

npx quartz build


### 로컬 서버로 미리보기 실행

npx quartz build --serve


### 로컬 빌드 에러 발생 시

`yargs` 관련 오류가 나오면 다음 명령 실행:

npm install yargs


---

## 🗑️ 2. 기존 매뉴얼 디렉토리 삭제

서버에 남아 있는 이전 매뉴얼 파일을 모두 삭제합니다.

sudo rm -rf /data/lx2/manual


---

## 📤 3. 서버2(82.190) 업로드 — manual/public → /data/lx2/manual

scp -i ~/Downloads/4csoft.pem -r /Volumes/4csoft/git/work/manual/public/*
lx2-manual@180.210.82.190:/data/lx2/manual/


---

## 🔧 4. 서버 접속 후 매뉴얼 디렉토리 구성

### 서버 접속

ssh -i ~/Downloads/4csoft.pem ubuntu@180.210.82.190


### 디렉토리 생성

sudo mkdir -p /data/lx2/manual


### 권한 변경

sudo chown -R lx2-manual:lx2-manual /data/lx2/manual


---

## 📄 5. Apache Rewrite 설정 (.htaccess)

SPA 라우팅을 위해 `.htaccess` 파일을 수정합니다.

sudo vi .htaccess


필요 시 vim 스왑 파일 삭제:

sudo rm -f /data/lx2/manual/.htaccess.swp


---

## 🛠️ 6. Apache 설정 파일 수정 (환경에 따라 선택)

### Apache 사이트 설정 파일 수정

sudo nano /etc/apache2/sites-available/000-default.conf


### VHosts 설정 파일 수정

sudo vi /etc/apache2/vhosts.conf


---

## 🔄 7. Apache 재시작

수정 사항을 반영하기 위해 Apache를 재시작합니다.

sudo systemctl restart apache2


---

## ⏺️ 8. 추가 명령 (기본 빌드 명령어)

필요 시 다음 명령으로 빌드 가능:

npx build --serve


---

## ✅ 작업 완료

위 절차를 모두 수행하면 `/manual` 경로에서 최신 LX2 매뉴얼이 배포되고  
Quartz 기반 정적 페이지가 Apache에서 정상 동작하게 됩니다.
