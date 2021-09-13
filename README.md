# React 공식문서 정리 (주요개념)

https://ko.reactjs.org/docs/hello-world.html

### 환경설정

- Vscode - IDE
- node, npm, npx - create-react-app

---

## 01. JSX

- JSX - React.createElement 간편 표현식
- {data}

## 02. Props

- Props - 컴포넌트에 전달되는 단일 객체
- 순수함수처럼 동작 - Props 자체를 수정해서는 안됨
- 컴포넌트 합성 - 여러 컴포넌트를 모아서
- 컴포넌트 추출 - 여러곳에서 사용되거나 / 복잡한 경우

## 03. State (State and LifeCycle)

- const [state, setState] = useState( );
- 컴포넌트 내의 상태 - 자신의 출력값을 변경
- Class component - State LifeCycle있고 이걸로 State를 관리
- Function component - 훅으로 관리
- 유의사항 - 직접수정X / 비동기적일 수 있음

## 04. 컴포넌트 생명주기 (React.Component)

- 생명주기 도표 - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- constructor( ) - state 초기화 및 메서드 바인딩
- componentDidMount - Dom 노드 초기화 및 데이터 fetch
- componentWillUnmount - 타이머 제거 및 요청취소 및 구독해제
- Functional Component - hook으로 대부분 구현 가능

## 05. 이벤트 (SyntheticEvent)

- 합성이벤트(SyntheticEvent) - 인터페이스는 같지만 직접 대응되지 않음
- Bubble(up) / Capture(down) - Capture > target > Bubble
- return false - e.preventDefault( ) 해줘야 함

## 06. 조건부 렌더링 (Conditional Rendering)

- if - if (condition) {return A} else {return B}
- && - condition && A (falsy 주의)
- 삼항연산자 - condition ? A : B
- 아예 안그리고 싶은 경우 - return null

## 07. List (Lists and Keys)

- map - 배열의 개별 요소를 순회
- default key - 안주면 react는 index를 쓴다(warning O, 동작은 함)
- 고유성 - 형제 사이에서만 고유하면 됨
- key props - key는 props로 넘어가지 않음

## 08. Form

- Controlled Component - input의 value를 state로 관리
- 다중입력 - event.target.name
- Uncontrolled Component - form element 자체의 내부상태 활용
- defaultValue, ref - 기본값 / value확인

## 09. Hooks

- https://ko.reactjs.org/docs/hooks-intro.html
- Class의 단점을 보완하면서 라이프사이클 등과 관련된 함수를 재사용 가능하도록 함
- **Hook 사용규칙**
  - 최상위에서만 Hook을 호출해야함 (반복문, 조건문, 중첩된 함수내에서 실행 X),
  - Functional Component와 custom Hook 내에서만 호출해야 함

#### useState

#### useEffect (데이터 fetch, 구독, DOM수정)

- componentDidMount / componentDidUpdate / componentWillUnmount
- componentDidMount + componentDidUpdate -> useEffect(( ) => { })
- 구독 : componentDidMount & componentWillUnmount -> useEffect 하나에서 처리
- **clean up** - 구독과 구독해지를 한 공간에서
- Effect가 업데이트 시마다 실행되는 이유?

  - (Class 메서드가 관련없는 로직들은 모아놓고, 관련있는 로직들은 여러개의 메서드로 나누어 놓은 경우가 있었다.)
  - componentDidMount / componentDidUpdate / componentWillUnmount
  - 이에 대한 해결책으로 표현을 **하나로 합치고**, **버그를 방지**하기 위해...

- Effect를 건너뛰어 성능 최적화하기?

  - 특정 state의 변경에만 반응하게
  - 이전, componentDidUpdate(prevProps, prevState) { }
  - 지금, **dependency array** - 필요한 변경시에만 effect 실행

#### Custom Hook

- 컴포넌트들에 **중복되는 Hook 로직을 묶어서 재사용** 하도록 함
- Hook에서 Hook으로 정보 전달 가능
- **useState** : 이전 값을 인자로 / 초기화 지연(함수)
- **useEffect** : 의존성 배열, 안주거나 / [ ] / [a, b]
- **useLayoutEffect** : useEffect와 유사, 모든 DOM변경 후 브라우저가 화면을 그리기 이전 시점에 동기적으로 수행됨
- **useReducer** : useState 대체, state / reducer / action
- **useContext**
- **useCallback & useMemo**
- **useRef** : current라는 상자, 내용의 변경은 알려주지 않음, 콜백 ref 사용

## 10. Composition

- Composition & Inheritance (합성 & 상속)
- Compositon - 컴포넌트에 컴포넌트 담기
- 담는 방법 - children / custom
- 특수화 - 그 값을 특정하게 할 수 있음

* typeof - type check
* 확장성 - 다양한 상황을 품을 수 있도록

## 11. HOC ( Higher Order Component)

- 고차 컴포넌트는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수
- HOC - 함수를 받아서 함수를 리턴
