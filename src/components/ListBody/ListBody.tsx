import { CheckOutlined } from '@ant-design/icons'
import { Button, List } from 'antd'
import React from 'react'

const ListBody = (props: any) => {
    return <List
        itemLayout="horizontal"
        className='list'
        dataSource={props.data}
        bordered
        size='large'
        renderItem={(item: any) => (
            <List.Item actions={[<Button onClick={() => props.removeTask(item.id)} danger type="dashed">Удалить</Button>]}>
                {!item.completed ?
                    <List.Item.Meta
                        avatar={<Button onClick={()=>props.checkTask(item.id)} className='btn_add'><CheckOutlined /></Button>}
                        style={{ textAlign: 'start', alignItems: 'center' }}
                        title={<p style={{ fontSize: '18px', marginBottom: '5px' }}>{item.title}</p>}
                        description={item.date}
                    />
                    : <List.Item.Meta
                        avatar={<Button disabled className='btn_add'><CheckOutlined /></Button>}
                        style={{ textAlign: 'start', alignItems: 'center' }}
                        title={<p style={{ fontSize: '18px', marginBottom: '5px', textDecoration: 'line-through' }}>{item.title}</p>}
                        description={item.date}
                    />
                }
            </List.Item>
        )}
    >
    </List>
}

export default ListBody