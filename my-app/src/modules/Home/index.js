import React, {Component}  from 'react';
import TreeViewMenu from 'react-simple-tree-menu'
import './index.css';

export default class Home extends Component {
    state = {
        message: 'Hi Parent 1'
    }

    navigate = (message) => {
        return (this.setState({message: message}));
    }

    render() {
        const directory = [
            {
                key: '1',
                label: 'Parent 1',
                message: 'Hi Parent 1',
                nodes: [
                    {
                        key: '1.01',
                        label: 'P1 C1',
                        message: 'Hi Parent 1 Child 1',
                        nodes: [
                            {
                                key: '1.01.01',
                                label: 'P1 C1 GC1',
                                message: 'Hi Parent 1 Child 1 Grand Child 1',
                            }
                        ]
                    },
                    {
                        key: '1.02',
                        label: 'P1 C2',
                        message: 'Hi Parent 1 Child 2',
                    }
                ]
            },
            {
                key: '2',
                label: 'Parent 2',
                message: 'Hi Parent 2',
            },
            {
                key: '3',
                label: 'Parent 3',
                message: 'Hi Parent 3',
                nodes: [
                    {
                        key: '3.01',
                        label: 'P3 C1',
                        message: 'Hi Parent 3 Child 1',
                    },
                    {
                        key: '3.02',
                        label: 'P3 C2',
                        message: 'Hi Parent 3 Child 2',
                    }
                ]
            }
        ];

        return (
            <div className='directory-wrapper'>
                <div className='directory-container'>
                    <TreeViewMenu
                        data={directory}
                        onClickItem={({ key, label, ...props }) => {
                            this.navigate(props.message); // user defined prop
                        }}    
                        debounceTime={125}
                        hasSearch={false}/> 
                </div>
                <div className='directory-results'>
                    <h1>{this.state.message}</h1>
                </div>
            </div>
        )
    }
}