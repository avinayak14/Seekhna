import React, { useState } from 'react'
import Flashcard from './components/Flashcard'
import ScenarioChat from './components/ScenarioChat'
import { categories, scenarios } from './data/content'

function App() {
  const [mode, setMode] = useState('vocab'); // 'vocab' or 'scenario'
  const [activeItem, setActiveItem] = useState(null); // category or scenario
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleItemSelect = (item) => {
    setActiveItem(item);
    setCurrentCardIndex(0);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (activeItem && activeItem.phrases && currentCardIndex < activeItem.phrases.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
    }
  };

  const handleBackToMenu = () => {
    setActiveItem(null);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          Welcome to <span className="text-gradient">Seekhna</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Master Hindi for social and professional connection.
        </p>
      </header>

      {!activeItem && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button
            className={`btn ${mode === 'vocab' ? 'btn-primary' : ''}`}
            onClick={() => setMode('vocab')}
            style={{ background: mode === 'vocab' ? undefined : 'var(--bg-card)' }}
          >
            📚 Vocabulary
          </button>
          <button
            className={`btn ${mode === 'scenario' ? 'btn-primary' : ''}`}
            onClick={() => setMode('scenario')}
            style={{ background: mode === 'scenario' ? undefined : 'var(--bg-card)' }}
          >
            🎭 Roleplay
          </button>
        </div>
      )}

      {!activeItem ? (
        <div className="animate-fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {mode === 'vocab' ? 'Select a Topic' : 'Select a Scenario'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {mode === 'vocab' ? categories.map(category => (
              <div
                key={category.id}
                className="card"
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                onClick={() => handleItemSelect(category)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{category.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{category.description}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-primary-dark)' }}>
                  {category.phrases.length} phrases
                </div>
              </div>
            )) : scenarios.map(scenario => (
              <div
                key={scenario.id}
                className="card"
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                onClick={() => handleItemSelect(scenario)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{scenario.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{scenario.description}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-primary-dark)' }}>
                  {scenario.steps.length} steps
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <button
            className="btn"
            onClick={handleBackToMenu}
            style={{ marginBottom: '1rem', paddingLeft: 0, color: 'var(--text-muted)' }}
          >
            ← Back to Menu
          </button>

          {mode === 'vocab' ? (
            <>
              <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{activeItem.title}</h2>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Phrase {currentCardIndex + 1} of {activeItem.phrases.length}
              </p>

              <Flashcard phrase={activeItem.phrases[currentCardIndex]} />

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                <button
                  className="btn"
                  onClick={handlePrev}
                  disabled={currentCardIndex === 0}
                  style={{ opacity: currentCardIndex === 0 ? 0.5 : 1, background: 'var(--bg-card)', color: 'white' }}
                >
                  Previous
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleNext}
                  disabled={currentCardIndex === activeItem.phrases.length - 1}
                  style={{ opacity: currentCardIndex === activeItem.phrases.length - 1 ? 0.5 : 1 }}
                >
                  Next Phrase
                </button>
              </div>
            </>
          ) : (
            <ScenarioChat scenario={activeItem} onComplete={handleBackToMenu} />
          )}
        </div>
      )}
    </div>
  )
}

export default App
