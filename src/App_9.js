import React, { Component } from 'react';
import logo from './logo.svg';
import classNames from 'classnames'
import classNamesBind from 'classnames/bind'
import styles from './App.css';
import boxStyles from './Box.scss';

class App extends Component {
  render() {
  	const cx = classNamesBind.bind(boxStyles);
  	console.log(cx);
  	const isBlue = true;

	return (
		<div className={styles.App}>
			<header className={styles['App-header']}>
			  <img src={logo} className={styles['App-logo']} alt="logo" />
			  <h1 className={styles['App-title']}>Welcome to React</h1>
			</header>
			<p className={styles['App-intro']}>
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<div className={boxStyles['box-wrapper']}>
				<div className={[boxStyles.box, boxStyles.blue].join(' ')}/>
			</div>
			<div className={boxStyles['box-wrapper']}>
				<div className={classNames(boxStyles.box, boxStyles.blue)}/>
			</div>
			<div className={boxStyles['box-wrapper']}>
				<div className={cx('box', 'blue')}/>
			</div>
			<div className={boxStyles['box-wrapper']}>
				<div className={cx('box', {blue: isBlue})}>
					<div className={cx('box-inside')}/>
				</div>
			</div>
	  </div>
	);
  }
}

export default App;
