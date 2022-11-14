import Card from './components/Card';
import CardInfo from './components/CardInfo';
import QRCode from './components/QRCode';

const App = () => {
  return (
    <div className="w-full h-[100vh] flex items-center">
      <Card>
        <QRCode />
        <CardInfo />
      </Card>
    </div>
  );
};
export default App;
