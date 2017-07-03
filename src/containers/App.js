import React from 'react';
import {connect} from 'react-redux';
import Select from './../components/Select/';
import block from 'bem-cn';


class App extends React.Component {
    render() {
        const b = block('App');

        return (
            <div className={b}>
                <h1 className={b('title')}>Select Example</h1>
                <Select
                    options={this.props.userCountry.list}
                    value={this.props.userCountry.current}
                    onChange={this.props.changeCountryCode}
                    native={this.props.browserDevice === 'Mobile'} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userCountry: state.userCountry,
    browserDevice: state.browser
});

const mapDispatchToProps = (dispatch) => ({
    changeCountryCode: (nextCode) =>  {
        dispatch({type: 'CHANGE_COUNTRY', payload: {code: nextCode}})
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);