import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Row, Col } from 'react-bootstrap'
import tt from './tt.png'

function App() {
  return (
    <div className="App">
      <Container>
      <h1 className="py-4 text-white">TIME TABLE - 6th SEMESTER [CSSE]</h1>
        
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
              <td>
              <a href="https://meet.google.com/nfv-uvje-oky?pli=1&authuser=1">
                BD
                </a>
                </td>
              
              <td>
              <a href="https://meet.google.com/puf-ttmd-kfo?pli=1&authuser=1">
                DMDW
                </a>
                </td>
              <td colSpan="3">
                <a href="https://mail.google.com/mail/u/1/#inbox">T&T LAB [KIIT MAIL]</a></td>

              <td>
                <a href="https://meet.google.com/wiu-bopd-fiw?pli=1&authuser=1">
                  ESDA
                </a>
              </td>

              <td>-</td>
            </tr>
            <tr className="text-center align-middle">
              <td>Tuesday</td>
              <td>
                <a href="https://meet.google.com/cxd-agij-ova?pli=1&authuser=1">ADBMS</a></td>
                <td><a href="meet.google.com/cry-xoif-qcp">CC</a></td>

              <td>
                <a href="https://meet.google.com/wiu-bopd-fiw?pli=1&authuser=1">
                  ESDA
                </a>
              </td>
                            
              <td>
              <a href="https://meet.google.com/nfv-uvje-oky?pli=1&authuser=1">
                BD
                </a>
                </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="text-center align-middle">
              <td>Wednesday</td>
              <td colSpan="2">
                <a href="https://meet.google.com/zdf-wqmg-qcn?pli=1&authuser=1">CC LAB</a></td>

              <td>
              <a href="https://meet.google.com/cxd-agij-ova?pli=1&authuser=1">
                ADBMS
                </a>
                </td>
                <td>
                <a href="https://meet.google.com/wiu-bopd-fiw?pli=1&authuser=1">
                  ESDA
                </a>
              </td>
              <td>-</td>
              <td>-</td>
              <td><a href="https://meet.google.com/ytf-pwed-ibi?pli=1&authuser=1">Proj Mgmt. 4:30</a></td>
            </tr>
            <tr className="text-center align-middle">
              <td>Thursday</td>
              <td>
              <a href="https://meet.google.com/puf-ttmd-kfo?pli=1&authuser=1">
                DMDW
                </a>
                </td>
                <td>
                <a href="https://meet.google.com/wiu-bopd-fiw?pli=1&authuser=1">
                  ESDA
                </a>
              </td>
              <td>
              <a href="https://meet.google.com/npn-zfuj-ezf?pli=1&authuser=1">
                CC
                </a>
                </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="text-center align-middle">
              <td>Friday</td>
              <td>
                <a href="https://meet.google.com/wrz-zowt-qbt?pli=1&authuser=1">CC</a>
              </td>
              <td>
              <a href="https://meet.google.com/puf-ttmd-kfo?pli=1&authuser=1">
                DMDW
                </a>
                </td>
                <td>
                <a href="https://meet.google.com/wiu-bopd-fiw?pli=1&authuser=1">
                  ESDA
                </a>
              </td>
              <td><a href="https://meet.google.com/cxd-agij-ova?pli=1&authuser=1">ADBMS</a></td>

              <td>-</td>
              <td>
              <a href="https://meet.google.com/nfv-uvje-oky?pli=1&authuser=1">
                BD
                </a>
                </td>
                <td><a href="https://meet.google.com/ytf-pwed-ibi?pli=1&authuser=1">Proj Mgmt. 4:30</a></td>
            </tr>
          </tbody>
        </Table>

        <img src={tt}className="img-fluid"/>

        <h2 className="text-center text-white py-4 mb-0">Make your own <a href="https://github.com/arn4b/timetable" >here</a></h2>
      </Container>
    </div>
  );
}

export default App;


