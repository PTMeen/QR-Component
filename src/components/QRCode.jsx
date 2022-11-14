import qr from '../assets/images/image-qr-code.png';

const QRCode = () => {
  return (
    <div>
      <img src={qr} alt="QR code" className="rounded-xl mx-auto" />
    </div>
  );
};
export default QRCode;
