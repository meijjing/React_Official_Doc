# React 공식문서 정리

https://ko.reactjs.org/docs/hello-world.html

## 01. JSX

- JSX - React.createElement 간편 표현식
- {data}

## 02. Props

- Props - 컴포넌트에 전달되는 단일 객체
- 순수함수처럼 동작 - Props 자체를 수정해서는 안됨
- 컴포넌트 합성 - 여러 컴포넌트를 모아서
- 컴포넌트 추출 - 여러곳에서 사용되거나 / 복잡한 경우

## 03. State

- const [state, setState] = useState( );
- 컴포넌트 내의 상태 - 자신의 출력값을 변경
- Class component - State LifeCycle있고 이걸로 State를 관리
- Function component - 훅으로 관리
- 유의사항 - 직접수정X / 비동기적일 수 있음

## 04. 컴포넌트 생명주기

- 생명주기 도표 - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- constructor( ) - state 초기화 및 메서드 바인딩
- componentDidMount - Dom 노드 초기화 및 데이터 fetch
- componentWillUnmount - 타이머 제거 및 요청취소 및 구독해제
- Functional Component - hook으로 대부분 구현 가능
