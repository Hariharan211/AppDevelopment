import React from 'react';

import './Feedback.css';
import axios from 'axios'; 
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Footer } from 'antd/es/layout/layout';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if feedback is empty before submitting
    if (!this.state.feedback.trim()) {
      alert('Feedback cannot be empty.');
      return;
    }
  
    const feedbackData = {
      message: this.state.feedback,
    };
  
    axios
      .post('http://localhost:8080/feedback/submit', JSON.stringify(feedbackData), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        alert('Feedback submitted successfully!');
        this.setState({ feedback: '' });
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };
  

  handleFeedbackChange = (e) => {
    this.setState({ feedback: e.target.value });
  };

  render() {
    return (
      <>
        <Navbar/>
        <div className='main'>
          <Sidebar/>
          <section className="container-fluid feedback-container">
            <div className="row">
              <div className="col-md-3">
                <div className="position-fixed">
                  {/* Your sidebar */}
                </div>
              </div>
              <div className="col-md-9 offset-md-2">
                <section className="mb-4">
                  <h2 className="h1-responsive text-primary fw-bold text-center my-4">Feedback</h2>
                  <p className="text-center w-responsive mx-auto mb-5">
                    Do you have any feedback? What could we improve upon?
                  </p>
                  <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form4Example6">Your feedback</label>
                          <textarea
                            className="form-control"
                            id="form4Example6"
                            rows="4"
                            value={this.state.feedback}
                            onChange={this.handleFeedbackChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-md-left">
                      <button className="btn btn-primary mt-4 mb-4" type="submit">
                        Send
                      </button>
                    </div>
                    <div className="status"></div>
                  </form>
                </section>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </>
    );
  }
}

export default Feedback;