import React, {Component}  from 'react';
import Directory from '../Directory/index';
import TreeMenu from 'react-simple-tree-menu'
import './index.css';

export default class Home extends Component {
    
    render() {
        const directory = [
            {
                key: '1',
                label: 'Parent 1',
                nodes: [
                    {
                        key: '1.01',
                        label: 'P1 C1',
                        nodes: [
                            {
                                key: '1.01.01',
                                label: 'P1 C1 GC1'
                            }
                        ]
                    },
                    {
                        key: '1.02',
                        label: 'P1 C2'
                    }
                ]
            },
            {
                key: '2',
                label: 'Parent 2',
            },
            {
                key: '3',
                label: 'Parent 3',
                nodes: [
                    {
                        key: '3.01',
                        label: 'P3 C1'
                    },
                    {
                        key: '3.02',
                        label: 'P3 C2'
                    }
                ]
            }
        ];

        return (
            <div className='directory-container'>
                <TreeMenu 
                    data={directory} 
                    hasSearch={false} 
                    initialActiveKey={'1'}	/>
            </div>
        )
    }
}