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
