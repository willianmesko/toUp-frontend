import React from 'react';
import './styles.scss';

const TrainingCard: React.FC = () => {
  return (
    <>
      <div className="container-profile">
        <div>
          <div className="card-profile">
            <div className="card-avatar-training">
              <img
                src="http://t2.gstatic.com/images?q=tbn:ANd9GcReF05v9LFNyOk7ECwAHzzIx3DDJ45-JJVYgeG2-f6GbMLc2gATDffU0A1D1zNp7Djo4AU8XLp7JdIObdjoXTQ"
                alt="Person"
              />
            </div>
            <div className="card-details">
              <div className="name">Aluno</div>
              <div className="occupation">Hipertrofia</div>

              <div className="card-about">
                <div className="item">
                  <span className="value">25</span>
                  <span className="label">Idade</span>
                </div>
                <div className="item">
                  <span className="value">70 kg </span>
                  <span className="label">Peso</span>
                </div>
                <div className="item">
                  <span className="value">175 cm</span>
                  <span className="label">Altura</span>
                </div>
              </div>
              <div className="skills">
                <span className="value">
                  Immeasurable Physical Prowess, Supernatural Reflexes and
                  Senses, Invulnerability, Indomitable Will, Enhanced Fighting
                  Skill
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-profile">
            <div className="card-avatar-training">
              <img
                src="http://t2.gstatic.com/images?q=tbn:ANd9GcReF05v9LFNyOk7ECwAHzzIx3DDJ45-JJVYgeG2-f6GbMLc2gATDffU0A1D1zNp7Djo4AU8XLp7JdIObdjoXTQ"
                alt="Person"
              />
            </div>
            <div className="card-details">
              <div className="name">Aluno</div>
              <div className="occupation">Hipertrofia</div>

              <div className="card-about">
                <div className="item">
                  <span className="value">25</span>
                  <span className="label">Idade</span>
                </div>
                <div className="item">
                  <span className="value">70 kg </span>
                  <span className="label">Peso</span>
                </div>
                <div className="item">
                  <span className="value">175 cm</span>
                  <span className="label">Altura</span>
                </div>
              </div>
              <div className="skills">
                <span className="value">
                  Immeasurable Physical Prowess, Supernatural Reflexes and
                  Senses, Invulnerability, Indomitable Will, Enhanced Fighting
                  Skill
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingCard;
