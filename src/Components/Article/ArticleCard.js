import { Card } from 'antd';

export const ArticleCard = () => {
    return (
        <Card title="Default size card" style={{ width: 400, textAlign: "left", margin: 30}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <a>Xem thêm...</a>
        </Card>
    )
}
