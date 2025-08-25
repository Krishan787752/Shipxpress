import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card } from "react-bootstrap";
import {
  HouseDoor,
  Building,
  People,
  CodeSlash,
  Link45deg,
  Briefcase,
  Tag,
  Gear,
  Globe,
  FileText,
  BoxSeam,
  Receipt,
} from "react-bootstrap-icons";
import SecSubnavbar from "../Components/SecSubnavbar";

const settings = [
  { title: "Channel", desc: "Import orders from your online store", icon: <HouseDoor size={28} /> },
  { title: "Warehouse", desc: "Manage your pickup locations", icon: <Building size={28} /> },
  { title: "Employees", desc: "Allow access to team members", icon: <People size={28} /> },
  { title: "API", desc: "Programmatically access data", icon: <CodeSlash size={28} /> },
  { title: "Webhooks", desc: "Receive shipments status notifications", icon: <Link45deg size={28} /> },
  { title: "Company Profile", desc: "Your company profile", icon: <Briefcase size={28} /> },
  { title: "Label Settings", desc: "Set your shipping label format", icon: <Tag size={28} /> },
  { title: "Account Settings", desc: "Update your profile or password", icon: <Gear size={28} /> },
  { title: "International KYC", desc: "Update your international KYC", icon: <Globe size={28} /> },
  { title: "Invoice Settings", desc: "Shipment invoice customization", icon: <FileText size={28} /> },
  { title: "Product Weight Freeze", desc: "Set weight dimensions", icon: <BoxSeam size={28} /> },
  { title: "Product HSN/GST Mapping", desc: "Set GST HSN against product", icon: <Receipt size={28} /> },
];

export default function Settings() {
  return (
    <div  className="h-[873px]">
     <SecSubnavbar/>
    <Container fluid className="bg-light min-vh-100 p-4 mt-[-88px] ">
      {/* Header */}
      <div className="bg-primary text-white fw-semibold px-4 py-2 rounded-top">
        SETTINGS
      </div>

      <div className="bg-white rounded-bottom shadow-sm p-4">
        <Row>
          {/* Left Panel */}
          <Col md={3} className="bg-light p-4 rounded">
            <h4 className="fw-bold mb-3">Settings</h4>
            <p className="text-muted small">
              Take your shipping experience a notch higher by regulating your
              panel settings as per your convenience and specific business
              requirements. From importing orders to managing labels and all
              other account settings, get everything at the tap of your finger
              for an uninterrupted experience.
            </p>
            <div className="text-center mt-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                alt="settings"
                width="120"
              />
            </div>
          </Col>

          {/* Right Panel */}
          <Col md={9}>
            <Row className="g-4">
              {settings.map((item, idx) => (
                <Col key={idx} sm={6} lg={4}>
                  <Card className="h-100 shadow-sm border-0 hover-shadow">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-light p-3 rounded me-3 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <Card.Title className="h6 fw-bold">{item.title}</Card.Title>
                          <Card.Text className="text-muted small">
                            {item.desc}
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
    </div>
  );
}
