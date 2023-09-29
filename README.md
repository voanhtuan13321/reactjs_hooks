# Nhóm 1: Tìm hiểu về Hooks và những thành phần có liên quan

## Hooks là gì?

> _Hooks_ là một tập hợp các `function` đặc biệt cho phép bạn sử dụng các tính năng của `React` trong các _functional components_ (từ phiên bản `React` 16.8) thay vì chỉ sử dụng các thành phần dựa _class components_.

## Class components là gì?

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
      <th>Nguồn dữ liệu</th>
      <td>Truyền từ component cha xuống component con</td>
      <td>Dữ liệu nội bộ của component</td>
    </tr>
    <tr>
      <th>Thay đổi giá trị</th>
      <td>Không thể thay đổi giá trị props trong component con</td>
      <td>Có thể thay đổi giá trị state trong component</td>
    </tr>
    <tr>
      <th>Được truyền qua</th>
      <td>Dùng thuộc tính trong JSX khi tạo instance</td>
      <td>Được khởi tạo trong constructor và quản lý bởi React</td>
    </tr>
    <tr>
      <th>Cập nhật giá trị</th>
      <td>Không thể cập nhật trực tiếp props</td>
      <td>Cập nhật bằng phương thức <code>setState()</code></td>
    </tr>
    <tr>
      <th>Gây ra re-render</th>
      <td>Thay đổi props gây re-render component</td>
      <td>Thay đổi state gây re-render component</td>
    </tr>
    <tr>
      <th>Sử dụng chính</th>
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
