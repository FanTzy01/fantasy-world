import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="header">
    <h1 class="title">Fantasy World</h1>
    <p class="subtitle">Where Fantasy Meets Horror</p>
  </div>

  <div class="content-grid">
    <div class="card">
      <h2>Dark Realms</h2>
      <p>Explore the mysterious lands where ancient magic and dark forces collide. From haunted forests to cursed castles, discover the secrets that lie in the shadows of our fantasy realm.</p>
    </div>

    <div class="card">
      <h2>Mythical Creatures</h2>
      <p>Learn about terrifying beasts and enchanted beings that roam our world. From blood-thirsty vampires to mystical dragons, each creature has a story to tell.</p>
    </div>

    <div class="card">
      <h2>Ancient Magic</h2>
      <p>Delve into forbidden spells and arcane rituals. Uncover the price of power and the consequences of tampering with forces beyond mortal understanding.</p>
    </div>

    <div class="card">
      <h2>Cursed Artifacts</h2>
      <p>Browse our collection of haunted relics and magical items. Each artifact holds a dark history and untold powers that could either save or doom their wielders.</p>
    </div>

    <div class="card">
      <h2>Lost Legends</h2>
      <p>Read tales of fallen kingdoms, forgotten heroes, and ancient prophecies. Some stories are better left untold, but here we reveal them all.</p>
    </div>

    <div class="card">
      <h2>Dark Prophecies</h2>
      <p>Witness the unfolding of ancient predictions and the omens that herald the coming of greater powers. The future is written in shadow and blood.</p>
    </div>

    <div class="card featured">
      <h2>Forbidden Libraries</h2>
      <p>Step into ancient libraries where forbidden knowledge is stored. Each dusty tome holds secrets that could drive mortals to madness. Explore at your own risk.</p>
    </div>

    <div class="card featured">
      <h2>Haunted Locations</h2>
      <p>Visit the most terrifying places in our realm. From abandoned temples to forgotten catacombs, each location has its own dark story and restless spirits.</p>
    </div>

    <div class="card">
      <h2>Dark Magic Schools</h2>
      <p>Discover the various schools of forbidden magic. From necromancy to blood magic, learn about the dangerous arts that most fear to practice.</p>
    </div>

    <div class="card">
      <h2>Mystical Weapons</h2>
      <p>Explore our collection of legendary weapons. Each blade, staff, and artifact carries a curse or blessing, forged in darkness or blessed by ancient powers.</p>
    </div>

    <div class="card featured">
      <h2>Ancient Civilizations</h2>
      <p>Uncover the truth about lost civilizations that wielded powers beyond comprehension. Their ruins still pulse with dark energy and forbidden knowledge.</p>
    </div>

    <div class="card">
      <h2>Demonic Entities</h2>
      <p>Learn about the hierarchy of demons and dark entities that lurk in the shadows. From lesser imps to great archdemons, know your adversaries.</p>
    </div>

    <div class="card">
      <h2>Magical Grimoires</h2>
      <p>Study the most powerful spell books known to exist. These ancient tomes contain knowledge that could reshape reality or unleash unspeakable horrors.</p>
    </div>

    <div class="card featured">
      <h2>Dark Rituals</h2>
      <p>Witness the most powerful and dangerous rituals ever recorded. From summoning ceremonies to transformation rites, these practices are not for the faint of heart.</p>
    </div>

    <div class="card">
      <h2>Enchanted Forests</h2>
      <p>Journey through mystical woods where reality bends and ancient spirits dwell. These forests hold secrets older than time itself.</p>
    </div>

    <div class="card">
      <h2>Cursed Bloodlines</h2>
      <p>Discover the tragic tales of families bound by ancient curses. Their stories of power, sacrifice, and darkness span generations.</p>
    </div>

    <div class="card featured">
      <h2>Otherworldly Portals</h2>
      <p>Explore the gateways to other dimensions and realms. These portals connect our world to places of unimaginable horror and wonder.</p>
    </div>

    <div class="card">
      <h2>Magical Artifacts</h2>
      <p>Examine our collection of powerful magical items. From rings of power to cursed amulets, each artifact has its own dark history.</p>
    </div>
  </div>

  <div class="featured-section">
    <h2>Featured Dark Tales</h2>
    <div class="story-grid">
      <div class="story-card">
        <h3>The Witch's Bargain</h3>
        <p>A tale of desperate deals and terrible consequences in the dark woods.</p>
      </div>
      <div class="story-card">
        <h3>The Midnight Court</h3>
        <p>Chronicles of the fae nobility and their sinister revelries.</p>
      </div>
      <div class="story-card">
        <h3>The Last Necromancer</h3>
        <p>A story of power, corruption, and the price of cheating death.</p>
      </div>
    </div>
  </div>

  <div class="quote-section">
    <blockquote>
      "In the realm of fantasy and horror, the line between reality and nightmare blurs, and the impossible becomes terrifyingly real."
    </blockquote>
  </div>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>About Fantasy World</h3>
        <p>Your premier destination for dark fantasy and horror content. Explore at your own risk.</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>Dark Archives</li>
          <li>Creature Catalog</li>
          <li>Spell Repository</li>
          <li>Ancient Texts</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Created with dark magic by <span class="creator">FanTzy</span> | Venture into the unknown at your own risk</p>
    </div>
  </footer>
`