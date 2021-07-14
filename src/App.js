import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
      <h1 className="py-4 text-white">TIME TABLE - 5th SEMESTER [CSSE G1]</h1>
        
        <Table className="tablee" striped bordered hover variant="dark" responsive>
          <thead>
          <tr className="text-center align-middle">
              <th>Day</th>
              <th>9 AM</th>
              <th>10 AM</th>
              <th>11 AM</th>
              <th>12 PM</th>
              <th>1 PM</th>
              <th>3 PM</th>
              <th>4 PM</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center align-middle">
              <td>Monday</td>
              <td>-</td>
              
              <td>
              <a href="https://meet.google.com/lookup/db5ettg7nw?authuser=1&hs=179">
                ML - Suresh Chandra Satapathy
                </a>
                </td>
              
              <td>
                <a href="https://meet.google.com/nno-piab-awr?authuser=1&pli=1">CN - Ayaskanta Mishra</a>
              </td>
              <td colSpan="2">
                <a href="https://mail.google.com/mail/u/1/#inbox">CN LAB [KIIT MAIL]</a></td>
              <td>IOT - Mnideepa Roy [WHATSAPP]</td>
              <td><a href="https://meet.google.com/wpk-mbbw-mug">SE - Kunal Anand</a></td>
            </tr>
            <tr className="text-center align-middle">
              <td>Tuesday</td>
              <td>
                <a href="https://us02web.zoom.us/j/84990893588?pwd=b1ppb0pkNmYvUjdYMVRZV3YzZXQ2QT09">AI - Junali Jasmine</a></td>
              <td>-</td>
              <td><a href="https://meet.google.com/siu-yzdw-aay">SE - Kunal Anand</a></td>
                            
              <td>-</td>
              <td>-</td>
              <td>
                <a href="https://meet.google.com/mdq-sfhk-vmh?pli=1&authuser=1">NLP - Biraja Isac</a>
              </td>
              <td>
                <a href="https://meet.google.com/nno-piab-awr?authuser=1&pli=1">CN - Ayaskanta Mishra</a>
              </td>
            </tr>
            <tr className="text-center align-middle">
              <td>Wednesday</td>
              <td>
                <a href="https://meet.google.com/mdq-sfhk-vmh?pli=1&authuser=1">NLP - Biraja Isac</a></td>
              <td>
                <a href="https://us02web.zoom.us/j/84990893588?pwd=b1ppb0pkNmYvUjdYMVRZV3YzZXQ2QT09">AI - Junali Jasmine</a></td>
                            <td>
              <a href="https://meet.google.com/lookup/db5ettg7nw?authuser=1&hs=179">
                ML - Suresh Chandra Satapathy
                </a>
                </td>
              <td>IOT - Mnideepa Roy [WHATSAPP]</td>
              <td>-</td>
              <td>-</td>
              <td><a href="https://meet.google.com/ttu-egxg-kqt?pli=1&authuser=1">AP LAB</a></td>
            </tr>
            <tr className="text-center align-middle">
              <td>Thursday</td>
              <td>-</td>
              <td>-</td>
                            <td>
              <a href="https://meet.google.com/lookup/db5ettg7nw?authuser=1&hs=179">
                ML - Suresh Chandra Satapathy
                </a>
                </td>
              <td><a href="https://meet.google.com/spo-qspp-jhi">SE - Kunal Anand</a></td>
              <td>IOT - Mnideepa Roy [WHATSAPP]</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="text-center align-middle">
              <td>Friday</td>
                            <td>
                <a href="https://meet.google.com/nno-piab-awr?authuser=1&pli=1">CN - Ayaskanta Mishra</a>
              </td>
              <td>
                <a href="https://us02web.zoom.us/j/84990893588?pwd=b1ppb0pkNmYvUjdYMVRZV3YzZXQ2QT09">AI - Junali Jasmine</a></td>
              <td><a href="https://meet.google.com/tdu-ravk-wxe">SE - Kunal Anand</a></td>
              <td>-</td>
              <td>-</td>
              <td>
                <a href="https://meet.google.com/mdq-sfhk-vmh?pli=1&authuser=1">NLP - Biraja Isac</a></td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>

        <h2 className="text-center text-white py-4 mb-0">Make your own here</h2>
      </Container>
    </div>
  );
}

export default App;


