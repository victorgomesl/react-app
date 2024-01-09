import "./styles.css";
import DiscordImage from '../../assets/discord.png';

function Discord() {
  return (
    <div className="discord-container">
      <a href="https://discord.com/link" className="discord-link">
        <img src={DiscordImage} className="discord-img" alt="Discord" />
        <h2 className="h2-discord title discord-title">Discord</h2>
      </a>
    </div>
  );
}

export default Discord;