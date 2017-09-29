import React from 'react';
import { Input, Switch, Rate, Notification, Button, Popover, Tabs } from 'element-react';

class App extends React.Component {
	getInitialState() {
    return {
      form: {
        name: ''
      }
    };
  }

	onChange(key, value) {
		this.state.form[key] = value;
		this.forceUpdate();
	}

	open() {
		Notification({
			title: '成功',
			message: '这是一条成功的提示消息',
			offset: 100
		});
	}

	open3() {
		Notification({
			title: '成功',
			message: '这是一条成功的提示消息',
			type: 'success'
		});
	}

	open4() {
		Notification({
			title: '警告',
			message: '这是一条警告的提示消息',
			type: 'warning'
		});
	}

	open5() {
		Notification.info({
			title: '消息',
			message: '这是一条消息的提示消息'
		});
	}

	open6() {
		Notification.error({
			title: '错误',
			message: '这是一条错误的提示消息'
		});
	}

	render() {
		return (
			<div>
				<span>Hello Word</span>
				<Input placeholder="请输入内容" onChange={this.onChange.bind(this, 'name')} />
				<Switch
					value={true}
					onColor="#13ce66"
					offColor="#ff4949">
				</Switch>
				<Rate showText={true} />
				<Button plain={true} onClick={this.open.bind(this)}>偏移的通知</Button>
				<Button plain={true} onClick={this.open3.bind(this)}>成功</Button>
				<Button plain={true} onClick={this.open4.bind(this)}>警告</Button>
				<Button plain={true} onClick={this.open5.bind(this)}>消息</Button>
				<Button plain={true} onClick={this.open6.bind(this)}>错误</Button>
				<Popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段容,这是一段容,这是一段容,这是一段容。">
					<Button>hover 激活</Button>
				</Popover>
				<Popover placement="bottom" title="标题" width="200" trigger="click" content="这是一段容,这是一段容,这是一段容,这是一段容。">
				<Button>click 激活</Button>
					</Popover>
				<Popover placement="right" title="标题" width="200" trigger="focus" content="这是一段容,这是一段容,这是一段容,这是一段容。">
					<Button>focus 激活</Button>
				</Popover>
        <Tabs>
          <Tabs.Pane label="用户管理" name="1">用户管理</Tabs.Pane>
          <Tabs.Pane label="配置管理" name="2">配置管理</Tabs.Pane>
          <Tabs.Pane label="角色管理" name="3">角色管理</Tabs.Pane>
          <Tabs.Pane label="定时补偿任务" name="4">定时补偿任务</Tabs.Pane>
        </Tabs>
        <ul className="list-group">
          <li className="list-group-item active">Item Action</li>
          <li className="list-group-item">Item Action</li>
          <li className="list-group-item">Item Action</li>
        </ul>
        <div className="alert alert-success">
          <span className="text-success">This is a success message.</span>
        </div>
        <button className="btn">
          Message
          <span className="badge badge-secondary">5</span>
        </button>
			</div>
		);
	}
}

export default App;
