import React from 'react';
import './styles.css';
import { Container, Athlete } from './styles';
const AthleteCard: React.FC = () => {
  return (
    <Container>
      <Athlete>
        <img
          src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Athlete-512.png"
          alt="Person"
        />
        <p className="card__name">Aluno</p>
        <div className="grid-container">
          <div className="grid-child-posts">25 Anos</div>

          <div className="grid-child-followers">Hipertrofia</div>
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        {/* <button className="btn draw-border">Follow</button>
        <button className="btn draw-border">Message</button> */}
      </Athlete>
      <Athlete>
        <img
          src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Athlete-512.png"
          alt="Person"
        />
        <p>Aluno</p>
        <div className="grid-container">
          <span className="grid-child-posts">25 Anos</span>

          <span className="grid-child-followers">Hipertrofia</span>
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        {/* <button className="btn draw-border">Follow</button>
        <button className="btn draw-border">Message</button> */}
      </Athlete>
      <Athlete>
        <img
          src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Athlete-512.png"
          alt="Person"
        />
        <p>Aluno</p>
        <div className="grid-container">
          <div className="grid-child-posts">25 Anos</div>

          <div className="grid-child-followers">Hipertrofia</div>
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        {/* <button className="btn draw-border">Follow</button>
        <button className="btn draw-border">Message</button> */}
      </Athlete>
      <Athlete className="card-athlete">
        <img
          src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Athlete-512.png"
          alt="Person"
        />
        <p>Aluno</p>
        <div className="grid-container">
          <div className="grid-child-posts">25 Anos</div>

          <div className="grid-child-followers">Hipertrofia</div>
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        {/* <button className="btn draw-border">Follow</button>
        <button className="btn draw-border">Message</button> */}
      </Athlete>
      <Athlete>
        <img
          src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Athlete-512.png"
          alt="Person"
        />
        <p>Aluno</p>
        <div>
          <div>25 Anos</div>

          <div>Hipertrofia</div>
        </div>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        {/* <button className="btn draw-border">Follow</button>
        <button className="btn draw-border">Message</button> */}
      </Athlete>
      <Athlete>
        <img
          src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Athlete-512.png"
          alt="Person"
        />
        <p>Aluno</p>
        <div>
          <div>25 Anos</div>

          <div>Hipertrofia</div>
        </div>
        <ul>
          <li>
            <a href="#">
              <i></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i></i>
            </a>
          </li>
        </ul>
        {/* <button className="btn draw-border">Follow</button>
        <button className="btn draw-border">Message</button> */}
      </Athlete>
    </Container>
  );
};

export default AthleteCard;
