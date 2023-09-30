# Nhóm 1: Tìm hiểu về Hooks và những thành phần có liên quan

## Hooks là gì?

> _Hooks_ là một tập hợp các `function` đặc biệt cho phép bạn sử dụng các tính năng của `React` trong các _functional components_ (từ phiên bản `React` 16.8) thay vì chỉ sử dụng các thành phần dựa _class components_.

## Vậy Class components là gì?

> _Class components_ là một trong hai kiểu chính của _component_ trong `React`, phối hợp với _functional components_. Được sử dụng rộng rãi trong phiên bản `React` trước khi _hooks_ được giới thiệu và trở thành một phần quan trọng của cách xây dựng ứng dụng `React`.

Khi tạo một _component_ bằng _Class component_ thì cần lưu ý 1 số điều sau:

- Tên của _component_ phải bắt đầu bằng một chữ cái viết hoa.

- _Component_ phải bao gồm câu lệnh `extends React.Component`, câu lệnh này tạo ra một mối quan hệ kế thừa với `React.Component` và cho phép _component_ của bạn truy cập vào các _function_ của `React.Component`.

- _Component_ cũng yêu cầu một phương thức `render()`, phương thức này trả về **HTML**.

Ví dụ:

```js
import `React` from 'react';

class Welcome extends React._Component_ {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Welcome;
```

Gọi và sử dụng _component_ đã tạo:

```js
import `React` from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```

### _State_ trong Class components?

> Trong `React`, _state_ là một khái niệm quan trọng trong việc quản lý trạng thái của một _component_. _State_ đại diện cho các dữ liệu có thể thay đổi trong _component_ và ảnh hưởng đến việc hiển thị và hoạt động của _component_ đó.

Để thao tác với state, chúng ta cần quan tâm tới:

- `this.state`: thuộc tính dùng để lưu trữ các state.

- `this.setState()`: phương thức dùng để gán lại state.

ví dụ:

```js
import `React` from 'react';

class Counter extends React._Component_ {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }

  increment = function () {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
```

**Chuyện gì sẽ xảy ra thì gọi phương thức `this.setState()`**?

- `React` sẽ cập nhật giá trị trong _state_: Phương thức `this.setState()` được sử dụng để cập nhật giá trị của các thuộc tính trong _state_.

- `React` sẽ kích hoạt quá trình _re-render_: Sau khi _state_ đã được cập nhật, `React` sẽ tự động kích hoạt quá trình render lại cho _component_ đó và tất cả các _component_ con của nó.

- Giao diện người dùng sẽ được cập nhật: Sau khi quá trình _re-render_ hoàn tất, `React` sẽ so sánh cây _component_ ảo mới với cây _component_ trước đó và cập nhật giao diện người dùng chỉ với các phần cần thay đổi.

- Chu kỳ **"_component_ lifecycle"** được kích hoạt: Sau khi giao diện người dùng được cập nhật, các phương thức **"_component_ lifecycle"** như `componentDidUpdate()` sẽ được kích hoạt (nếu được triển khai) để cho phép bạn thực hiện các hành động bổ sung sau khi _component_ đã được cập nhật.

### Vậy Lifecycle trong react là gì?

> Là một vòng đời khi bắt đầu và kết thúc một _component_. Là một tập hợp các phương thức trong `React` cho phép thực hiện hành động tại các điểm khác nhau trong vòng đời (**lifecycle**) của một _component_. Các phương thức này được gọi tự động bởi `React` tại các thời điểm quan trọng trong quá trình của một _component_, cho phép bạn thực hiện các tác vụ như khởi tạo, cập nhật, và hủy bỏ _component_.

![Alt text](/images/image.png)

Có 3 giai đoạn chính:

- **Mounting**: là quá trình khi một _component_ được khởi tạo và được chèn vào **DOM** (cây phần tử HTML) lần đầu tiên. Quá trình này sẽ kích hoạt các phương thức:

  1. `constructor()`: Đây là phương thức khởi tạo của một _component_. Nó được gọi đầu tiên khi _component_ được tạo ra. Trong phương thức này, bạn có thể khởi tạo _state_ và gán các giá trị ban đầu cho các biến.

  1. `static getDerivedStateFromProps()`: Phương thức này được gọi sau `constructor` và trước `render`. Nó cho phép bạn cập nhật _state_ của _component_ dựa trên _props_ mới được nhận. Tuy nhiên, trong hầu hết các trường hợp, việc sử dụng phương thức này không cần thiết.

  1. `render()`: Phương thức này trả về `JSX` (React elements) để hiển thị nội dung của _component_. Đây là bước quan trọng trong quá trình mounting và được gọi sau phương thức `getDerivedStateFromProps()`.

  1. `componentDidMount()`: Phương thức này được gọi ngay sau khi _component_ đã được chèn vào `DOM`. Trong phương thức này, bạn có thể gọi các API bên ngoài, khởi tạo các biến, thiết lập các sự kiện (event listeners), hoặc thực hiện bất kỳ tác vụ khởi tạo nào cần thiết. Đây là nơi thích hợp để bắt đầu các hoạt động không đồng bộ như gọi API từ máy chủ.

  Ví dụ:

  ```js
  import React from 'react';

  class ExampleComponent extends React._Component_ {
    constructor(props) {
      super(props);
      console.log('Constructor is called');
    }

    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps is called');
      return null;
    }

    componentDidMount() {
      console.log('componentDidMount is called');
    }

    render() {
      console.log('Render is called');
      return (
        <div>
          <h1>Example _Component_</h1>
        </div>
      );
    }
  }

  export default ExampleComponent;
  ```

  Kết quả trong console khi chạy đoạn code trên:

  ```js
  Constructor is called
  getDerivedStateFromProps is called
  Render is called
  componentDidMount is called
  ```

- **Updating**: là quá trình khi một _component_ được cập nhật để hiển thị thông tin mới (thay đổi _state_ hoặc _props_). Quá trình updating xảy ra khi có sự thay đổi trong _state_ hoặc _props_ của _component_ và dẫn đến việc **re-render** _component_ đó trên trang web. Quá trình này sẽ kích hoạt các phương thức:

  1. `static getDerivedStateFromProps()`: Phương thức này được gọi trước khi một _component_ được **re-render**. Nó cho phép bạn cập nhật _state_ của _component_ dựa trên _props_ mới được nhận. Tuy nhiên, trong hầu hết các trường hợp, việc sử dụng phương thức này không cần thiết.

  1. `shouldComponentUpdate(nextProps, nextState)`: Phương thức này được gọi để xác định xem _component_ có nên **re-render** hay không. Mặc định, `React` sẽ **re-render** _component_ sau mỗi lần có sự thay đổi trong _state_ hoặc _props_. Bằng cách viết logic trong phương thức này, bạn có thể quyết định xem _component_ có cần **re-render** hay không dựa trên các giá trị mới của _state_ và _props_.

  1. `render()`: Phương thức này trả về `JSX` (React elements) để hiển thị nội dung của _component_. Nếu _component_ được phép **re-render**, phương thức render sẽ được gọi để tạo nội dung mới.

  1. `getSnapshotBeforeUpdate(prevProps, prevState)`: Phương thức này được gọi ngay trước khi _component_ được **re-render**. Nó cho phép bạn lấy thông tin (snapshot) của DOM trước khi có bất kỳ thay đổi nào để sau này sử dụng (thường là để duy trì scroll position).

  1. `componentDidUpdate(prevProps, prevState, snapshot)`: Phương thức này được gọi sau khi _component_ đã **re-render**. Trong phương thức này, bạn có thể thực hiện các thao tác sau khi _component_ đã được cập nhật, như gọi API, xử lý sự kiện hoặc cập nhật _state_.

  Ví dụ:

  ```js
  import React from 'react';

  class ExampleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    componentDidMount() {
      console.log('componentDidMount is called');
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate is called');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('getSnapshotBeforeUpdate is called');
      return 'Snapshot';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('componentDidUpdate is called');
      console.log('Previous state:', prevState);
      console.log('Current state:', this.state);
      console.log('Snapshot:', snapshot);
    }

    handleClick = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };

    render() {
      console.log('Render is called');
      return (
        <div>
          <h1>Example _Component_</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment</button>
        </div>
      );
    }
  }

  export default ExampleComponent;
  ```

  Kết quả khi chạy và _click_ vào `button` Increment:

  ```js
  shouldComponentUpdate is called
  Render is called
  getSnapshotBeforeUpdate is called
  componentDidUpdate is called
  Previous state: {count: 0}
  Current state: {count: 1}
  Snapshot: Snapshot
  ```

- **Unmounting**: là quá trình khi một _component_ bị gỡ bỏ khỏi cây _component_ và không còn tồn tại trong giao diện người dùng. Quá trình _Unmounting_ xảy ra khi một _component_ được gỡ bỏ hoặc thay thế bằng một _component_ khác hoặc khi _component_ cha của nó bị gỡ bỏ. Quá trình này sẽ gọi phương thức:

  1. `componentWillUnmount()`: Phương thức này được gọi trước khi _component_ bị gỡ bỏ hoặc _unmounted_. Trong phương thức này, bạn có thể thực hiện các tác vụ dọn dẹp, hủy đăng ký sự kiện, huỷ bỏ kết nối mạng, hoặc giải phóng bất kỳ tài nguyên nào mà _component_ đã sử dụng.

  Ví dụ:

  ```js
  import React from 'react';

  class ExampleComponent extends React.Component {
    componentWillUnmount() {
      console.log('componentWillUnmount is called');
      // Thực hiện các tác vụ dọn dẹp, hủy đăng ký sự kiện, v.v.
    }

    render() {
      return (
        <div>
          <h1>Example Component</h1>
          {/* Nội dung component */}
        </div>
      );
    }
  }

  export default ExampleComponent;
  ```

### Props trong React là gì?

> Trong **ReactJS**, _props_ (viết tắt của "properties") là một cách để truyền dữ liệu từ _component_ cha xuống _component_ con. _Props_ được sử dụng để truyền các giá trị tùy chỉnh, thuộc tính và hành vi từ một _component_ cha cho một _component_ con.

Ví dụ:

```js
// component cha
import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting
          name='John'
          message='Welcome to React!'
        />
      </div>
    );
  }
}

export default App;
```

Trong ví dụ trên, component **App** sử dụng component **Greeting** và truyền các giá trị _props_ là `name="John"` và `message="Welcome to React!"`. Khi component **Greeting** được render trong component **App**

```js
// component con
import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Greeting;
```

Ở ví dụ trên, component _Greeting_ nhận hai _props_ là `name` và `message`. Trong phần `render`, giá trị của _props_ được truyền vào được sử dụng bằng cách sử dụng cú pháp `{this.props.name}` và `{this.props.message}`

### Vậy sự khác nhau giữa state và props là gì?

Trong ReactJS, có sự khác nhau quan trọng giữa props (properties) và state (trạng thái):

- Props (properties):

  1. Props là dữ liệu được truyền từ component cha xuống component con.

  1. Props là chỉ đọc (read-only), tức là không thể thay đổi giá trị của props trong component con.

  1. Props được truyền vào component thông qua thuộc tính trong JSX khi tạo instance của component.

  1. Props được sử dụng để truyền các giá trị tùy chỉnh, thuộc tính và hành vi từ component cha cho component con.
  1. Props không thay đổi trong suốt vòng đời của component, nghĩa là giá trị props không thay đổi sau khi được truyền vào.

- State (trạng thái):

  1. State là dữ liệu nội bộ của một component.

  1. State có thể thay đổi trong component, và khi state thay đổi, component sẽ được render lại để phản ánh các thay đổi đó.
  1. State được khởi tạo trong constructor của component và được quản lý bởi React.

  1. State có thể được cập nhật bằng cách sử dụng phương thức setState().

  1. Thay đổi state sẽ gây ra việc re-render lại component và các component con của nó (nếu cần).

  1. State thường được sử dụng để lưu trữ và quản lý các dữ liệu và trạng thái nội bộ trong một component.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Props</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nguồn dữ liệu</td>
      <td>Truyền từ component cha xuống component con</td>
      <td>Dữ liệu nội bộ của component</td>
    </tr>
    <tr>
      <td>Thay đổi giá trị</td>
      <td>Không thể thay đổi giá trị props trong component con</td>
      <td>Có thể thay đổi giá trị state trong component</td>
    </tr>
    <tr>
      <td>Được truyền qua</td>
      <td>Dùng thuộc tính trong JSX khi tạo instance</td>
      <td>Được khởi tạo trong constructor và quản lý bởi React</td>
    </tr>
    <tr>
      <td>Cập nhật giá trị</td>
      <td>Không thể cập nhật trực tiếp props</td>
      <td>Cập nhật bằng phương thức <code>setState()</code></td>
    </tr>
    <tr>
      <td>Gây ra re-render</td>
      <td>Thay đổi props gây re-render component</td>
      <td>Thay đổi state gây re-render component</td>
    </tr>
    <tr>
      <td>Sử dụng chính</td>
      <td>Truyền dữ liệu và hành vi từ component cha</td>
      <td>Quản lý dữ liệu và trạng thái nội bộ của component</td>
    </tr>
  </tbody>
</table>

## JSX là gì?

> **JSX (JavaScript XML)** là một phần mở rộng cú pháp của `JavaScript` cho phép bạn viết các đoạn mã tương tự `HTML` trong các thành phần `React`. Nó là một phần không thể thiếu trong quá trình phát triển ứng dụng `React`, giúp tạo ra các thành phần UI động và dễ đọc, định nghĩa _props_ và truyền dữ liệu giữa các thành phần một cách dễ dàng.

Ví dụ:

```js
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a JSX component.</p>
      </div>
    );
  }
}

export default MyComponent;
```

**Vậy nếu trước đây chưa có JSX thì sẽ code như nào?**

Chúng ta sẽ sử dụng các phương thức của React để tạo và điều khiển các thành phần.

Ví dụ:

```js
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return React.createElement(
      'div',
      null, // chỗ này dùng để truyền props
      React.createElement('h1', null, 'Hello, World!'),
      React.createElement('p', null, 'This is a React component.')
    );
  }
}

export default MyComponent;
```

**So sánh việc sử dụng React thuần và việc sử dụng JSX:**

- **Cú pháp:** JSX cho phép bạn viết mã tương tự HTML trong các thành phần React, trong khi khi sử dụng React thuần, bạn phải sử dụng các phương thức như React.createElement() để tạo thành phần. JSX giúp mã nguồn trở nên _dễ đọc hơn_ và _giảm độ phức tạp_ so với việc tạo thành phần bằng React thuần.

- **Hiệu suất:** JSX và React thuần đều có hiệu suất tương tự vì khi mã JSX được biên dịch, nó sẽ được chuyển đổi thành các cuộc gọi hàm React tương ứng. Do đó, không có sự khác biệt đáng kể về hiệu suất giữa hai phương pháp này. Tuy nhiên, vì phải biên dịch sang lại code, nên JSX vẫn chậm hơn React thuần.

- **Sự linh hoạt:** JSX cho phép bạn tận dụng các tính năng của JavaScript trong các thành phần React, bao gồm việc sử dụng biểu thức JavaScript, các hàm, và các phương thức. Bằng cách này, JSX cho phép bạn tạo ra mã động và linh hoạt hơn. Trong khi đó, khi sử dụng React thuần, bạn phải sử dụng các phương thức của React để tạo và điều khiển các thành phần, điều này có thể đòi hỏi một số công việc bổ sung để đạt được cùng một mục đích.

**File.js và File.jsx khác nhau như nào?**

- Một JS tập tin là một phần mở rộng tập tin JavaScript, điều này được sử dụng cho bất kỳ mô-đun và đoạn mã thực hiện trong tinh khiết JavaScript. Bạn nên sử dụng tệp JS khi viết các hàm sẽ không sử dụng bất kỳ tính năng React nào nhưng sẽ được sử dụng giữa các thành phần React khác nhau.

- JSX là một phần mở rộng cú pháp tệp được sử dụng bởi React, bạn có thể kết xuất thành phần, nhập tệp CSS và sử dụng các móc React trong số những thứ khác. Bạn nên sử dụng tệp JSX khi hiển thị một thành phần React.

> Sử dụng cú pháp JSX trong một tệp tin JavaScript (.js), React vẫn có thể chạy được mã nguồn của bạn nếu bạn đã cấu hình môi trường phù hợp. Tuy nhiên, mặc dù React có thể chạy mã JSX trong tệp tin JavaScript thông thường, việc sử dụng phần mở rộng tệp tin .jsx được khuyến nghị để làm rõ rằng tệp tin đó chứa mã nguồn sử dụng cú pháp JSX. Việc sử dụng phần mở rộng .jsx giúp cho việc đọc, hiểu và duy trì mã nguồn dễ dàng hơn, đặc biệt khi bạn có nhiều tệp tin trong dự án React của mình.

## Vậy Function components là gì?

> **Function component** là một loại thành phần trong `React` được viết dưới dạng một hàm `JavaScript`. Đây là một cách phổ biến để tạo các thành phần trong `React`. Nó được định nghĩa bằng cách sử dụng một hàm `JavaScript`, và hàm này trả về một phần tử `React` hoặc một cây phần tử `React`. Hàm này có thể nhận vào một đối số (thường được gọi là `props`) để truyền dữ liệu và cấu hình cho thành phần.

Ví dụ:

```js
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

Một số đặc điểm nổi bật trong Function component:

- Hàm `render()`: Trong một _function component_, hàm render không cần được khai báo một cách rõ ràng như trong _class component_. Thay vào đó, _function component_ trực tiếp trả về phần tử `React` hoặc cây phần tử `React` từ hàm chính của nó.

- Không có **State**: Trong quá khứ, _function component_ không có khả năng lưu trữ trạng thái nội bộ (state). Tuy nhiên, kể từ phiên bản **React 16.8**, `React` đã giới thiệu `React Hooks`, cho phép chúng ta sử dụng _state_ và các tính năng khác của `React` trong _function component_ bằng cách sử dụng hook như useState, useContext,... (Chúng ta tìm hiểu về các hooks này ở phần sau).

- Không có **Lifecycle Methods**: _Function component_ không có các phương thức _lifecycle_ như `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()`,... Thay vào đó, chúng ta có thể sử dụng hook `useEffect` để thực hiện các tác vụ tương đương với _lifecycle_ trong _function component_.

- Tính Dễ Đọc và Đơn Giản: _Function component_ thường có cú pháp ngắn gọn hơn so với _class component_. Việc sử dụng _function component_ giúp mã nguồn dễ đọc và dễ hiểu hơn.

- Tương Thích Với `React Hooks`: _Function component_ là cách chính thức để sử dụng `React Hooks`. Hooks chỉ có thể được sử dụng trong _function component_, không thể sử dụng trong _class component_.

<table>
  <thead>
    <tr>
      <th>Thuộc tính</th>
      <th>Function Component</th>
      <th>Class Component</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cú pháp</td>
      <td>Được viết dưới dạng function JavaScript.</td>
      <td>Được viết dưới dạng class JavaScript.</td>
    </tr>
    <tr>
      <td>State</td>
      <td>Trước React 16.8, không hỗ trợ lưu trữ state.</td>
      <td>Có thể sử dụng state thông qua this.state.</td>
    </tr>
    <tr>
      <td>Lifecycle Methods</td>
      <td>Sử dụng hook useEffect để thực hiện các tác vụ tương đương với lifecycle.</td>
      <td>Có các phương thức lifecycle như componentDidMount, componentDidUpdate, componentWillUnmount, v.v.</td>
    </tr>
    <tr>
      <td>React Hooks</td>
      <td>Hỗ trợ sử dụng React Hooks.</td>
      <td>Không hỗ trợ sử dụng React Hooks.</td>
    </tr>
    <tr>
      <td>Độ dễ đọc</td>
      <td>Dễ đọc và hiểu hơn.</td>
      <td>Phức tạp hơn và khó hiểu hơn.</td>
    </tr>
  </tbody>
</table>

### Hooks trong React?

Dưới đây là một số hooks phổ biến trong React:

1. **useState**: Hook này cho phép bạn sử dụng _state_ trong _function component_. Bằng cách sử dụng **useState**, bạn có thể khai báo và cập nhật giá trị của biến state.

1. **useReducer**: Hook này cho phép bạn quản lý state bằng cách sử dụng một `reducer function`. Bằng cách sử dụng **useReducer**, bạn có thể thay thế **useState** trong trường hợp có logic phức tạp hơn để cập nhật state.

1. **useEffect**: Hook này cho phép bạn thực hiện side effects (hiệu ứng phụ) trong _function component_. Bằng cách sử dụng **useEffect**, bạn có thể thực hiện các tác vụ như gọi API, đăng ký sự kiện, hoặc thay đổi DOM khi component được render hoặc cập nhật.

1. **useContext**: Hook này cho phép bạn truy cập vào Context trong _function component_. Bằng cách sử dụng **useContext**, bạn có thể truy cập các giá trị được chia sẻ trong toàn bộ ứng dụng thông qua **Context Provider**.

1. **useRef**: Hook này cho phép bạn tạo một _ref_ hoặc lưu trữ giá trị trong _function component_. Bằng cách sử dụng **useRef**, bạn có thể tham chiếu đến các phần tử DOM hoặc giá trị khác trong component.

1. **useCallback**: Hook này cho phép bạn memoize (ghi nhớ) một hàm trong _function component_. Bằng cách sử dụng **useCallback**, bạn có thể tạo lại hàm chỉ khi các _dependency_ thay đổi, giúp tối ưu hiệu năng.

1. **useMemo**: Hook này cho phép bạn memoize một giá trị tính toán trong _function component_. Bằng cách sử dụng **useMemo**, bạn có thể tạo lại giá trị chỉ khi các _dependency_ thay đổi, giúp tối ưu hiệu năng.

1. **custom hooks**: Là một hàm JavaScript bắt đầu bằng từ khóa _"use"_ và sử dụng các hooks khác (có thể là hooks có sẵn hoặc custom hooks khác) trong nội dung của nó.

#### useState hook?

> Là một hook cho phép bạn sử dụng state trong function component.

Cú pháp sử dụng: `const [state, setState] = useState(initial);`

```js
import React, { useState } from 'react'; // import hook

function MyComponent() {
  const [count, setCount] = useState(0); // use hook

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

Trong ví dụ trên, chúng ta sử dụng useState để tạo một state count và một hàm setCount để cập nhật giá trị của state đó. Ban đầu, giá trị khởi tạo của count là 0.

Dưới đây là đoạn code tương tự nhưng khi code bằng _Class components_:

```js
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

> Khi hàm set trong useState được gọi, quá trình re-render của `React` sẽ chạy.

> Nếu gán giá trị trực tiếp vào biến state mà không sử dụng hàm set để cập nhật giá trị, `React` sẽ không nhận biết được sự thay đổi và không thể trigger lại quá trình render. Điều này có nghĩa là giao diện người dùng sẽ không được cập nhật và không hiển thị giá trị mới của state.

#### useReducer hook?

> Là một hook cho phép bạn quản lý state của một _component_ sử dụng cơ chế reducer, tương tự như trong _Redux_. Nó cung cấp một cách linh hoạt hơn để xử lý các trạng thái phức tạp và các hành động liên quan đến state.
>
> **useReducer** nhận vào hai tham số: _reducer function_ và giá trị khởi tạo của _state_. _Reducer function_ là một hàm nhận vào hai tham số: _state_ hiện tại và action, và trả về _state_ mới. Nó xác định cách _state_ sẽ thay đổi dựa trên _action_ được gửi vào.

Cú pháp sử dụng: `const [state, dispatch] = useReducer(reducer_function, initial);`

```js
import React, { useReducer } from 'react'; // import hook

// create reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // use hook

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default MyComponent;
```

Dưới đây là đoạn code tương tự nhưng khi code bằng _Class components_:

```js
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default MyComponent;
```

![Alt text](/images/image1.png)

> Khi gọi hàm _dispatch_ trong **useReducer**, một _action_ được gửi đến _reducer function_ để xử lý. _Reducer function_ nhận _action_ và _state_ hiện tại làm đầu vào và trả về _state_ mới.
>
> Khi _dispatch_ được gọi, `React` sẽ gọi _reducer function_ và truyền _action_ và _state_ hiện tại vào. _Reducer function_ sẽ kiểm tra _action_ và dựa vào loại _action_ để xác định cách thay đổi _state_. Sau đó, nó trả về _state_ mới.
>
> Sau khi _reducer function_ trả về _state_ mới, `React` sẽ so sánh _state_ mới với _state_ hiện tại. Nếu _state_ mới khác _state_ hiện tại, `React` sẽ cập nhật _state_ và kích hoạt lại quá trình render. Các _component_ sử dụng _state_ sẽ được render lại với _state_ mới và giao diện người dùng sẽ được cập nhật.

> Nếu bạn gán trực tiếp giá trị mới vào biến _state_ mà không sử dụng hàm _dispatch_, thì Reducer không sẽ nhận biết được sự thay đổi và không thể trigger lại quá trình _render_. Điều này có nghĩa là giao diện người dùng sẽ không được cập nhật và không hiển thị giá trị mới của _state_.

#### useEffect hook?

> Là một trong những hooks quan trọng nhất và được sử dụng rộng rãi. Nó cho phép bạn thực hiện các side effect trong các _component functional_. Side effect có thể là các tác vụ như gọi API, đăng ký và hủy đăng ký các sự kiện, thao tác với DOM, và nhiều tác vụ khác.
>
> **useEffect** được sử dụng để thay thế các lifecycle methods trong các component class như `componentDidMount()`, `componentDidUpdate()`, và `componentWillUnmount()`.

Một số cách sử dụng useEffect:

1.  _useEffect không có dependencies_: Khi không cung cấp dependencies, useEffect sẽ gọi lại sau mỗi lần render, bao gồm cả render đầu tiên.

    ```js
    useEffect(() => {
      // Mã thực thi sau mỗi lần render
    });
    ```

1.  _useEffect với dependencies rỗng_: Khi dependencies được truyền vào là một mảng rỗng [], useEffect chỉ gọi một lần sau khi component được render lần đầu tiên (tương đương với `componentDidMount()` trong class component).

    ```js
    useEffect(() => {
      // Mã thực thi chỉ gọi một lần
    }, []);
    ```

    Ví dụ function component:

    ```js
    import React, { useEffect } from 'react'; // import hook

    function MyComponent() {
      // use hook
      useEffect(() => {
        // Mã thực thi chỉ gọi một lần
        console.log('Component did mount');
      }, []);

      return (
        <div>
          <h1>Hello, World!</h1>
        </div>
      );
    }

    export default MyComponent;
    ```

    Ví dụ class component:

    ```js
    import React from 'react';

    class MyComponent extends React.Component {
      componentDidMount() {
        // Mã thực thi chỉ gọi một lần
        console.log('Component did mount');
      }

      render() {
        return (
          <div>
            <h1>Hello, World!</h1>
          </div>
        );
      }
    }

    export default MyComponent;
    ```

1.  _useEffect với dependencies_: Khi dependencies được cung cấp, useEffect sẽ gọi lại khi một hoặc nhiều dependencies thay đổi. Điều này thường được sử dụng để theo dõi và xử lý các thay đổi trong các biến hoặc props.

    ```js
    useEffect(() => {
      // Mã thực thi khi dependencies thay đổi
    }, [dependency1, dependency2]);
    ```

    Ví dụ:

    ```js
    import React, { useState, useEffect } from 'react'; // import hook

    function MyComponent() {
      const [count, setCount] = useState(0);

      // use hook
      useEffect(() => {
        // Mã thực thi khi giá trị của count thay đổi
        console.log('Count changed:', count);
      }, [count]);

      const increment = () => {
        setCount((prevCount) => prevCount + 1);
      };

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }
    ```

1.  _useEffect trả về một hàm cleanup_: Bạn có thể trả về một hàm từ useEffect để thực hiện các tác vụ dọn dẹp hoặc hủy bỏ các tài nguyên đã được tạo trong useEffect. Hàm cleanup sẽ được gọi trước khi component bị unmount hoặc trước khi useEffect gọi lại (tương đương với `componentWillUnmount()` trong class component)

    ```js
    useEffect(() => {
      // Mã thực thi

      return () => {
        // Mã dọn dẹp hoặc hủy bỏ tài nguyên
      };
    }, []);
    ```

    Ví dụ function component:

    ```js
    import React, { useEffect } from 'react';

    function MyComponent() {
      useEffect(() => {
        // Mã thực thi khi component được mount
        console.log('Component did mount');

        return () => {
          // Mã thực thi khi component bị unmount (cleanup)
          console.log('Component will unmount');
        };
      }, []);

      return (
        <div>
          <h1>Hello, World!</h1>
        </div>
      );
    }
    ```

    Ví dụ class component:

    ```js
    import React from 'react';

    class MyComponent extends React.Component {
      componentDidMount() {
        // Mã thực thi khi component được mount
        console.log('Component did mount');
      }

      componentWillUnmount() {
        // Mã thực thi khi component bị unmount (cleanup)
        console.log('Component will unmount');
      }

      render() {
        return (
          <div>
            <h1>Hello, World!</h1>
          </div>
        );
      }
    }
    ```
