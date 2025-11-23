import React, { useState, useMemo } from 'react';
import { corpus } from './data/corpus';
import useSRS from './hooks/useSRS';
import useSpeech from './hooks/useSpeech';
import ReviewSession from './components/ReviewSession';
import './App.css'; // Ensure we have basic styles if needed, or rely on index.css

function App() {
  const [view, setView] = useState('home'); // 'home', 'review'
  const [filterLevel, setFilterLevel] = useState('1'); // Default to Level 1

  const { srsData, getDueItems, startLearning, submitReview, getStats } = useSRS();
  const { speak } = useSpeech();

  // Derived State
  const dueItems = useMemo(() => getDueItems(corpus), [getDueItems]);
  const stats = getStats();

  // Library Logic: Filter corpus by level
  const libraryItems = useMemo(() => {
    return corpus.filter(item => item.level === parseInt(filterLevel));
  }, [filterLevel]);

  const handleStartReview = () => {
    setView('review');
  };

  const handleReviewComplete = () => {
    setView('home');
  };

  const handleAddToLearning = (id) => {
    startLearning(id);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* HEADER */}
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>
          Seekhna <span className="text-gradient">Fluency</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Master Hindi with Spaced Repetition.
        </p>

        {/* STATS BAR */}
        <div style={{
          display: 'inline-flex',
          gap: '2rem',
          background: 'rgba(255,255,255,0.05)',
          padding: '1rem 2rem',
          borderRadius: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>{stats.totalLearned}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Learned</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: dueItems.length > 0 ? '#ef4444' : '#22c55e' }}>
              {dueItems.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Due Today</div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      {view === 'home' && (
        <div className="animate-fade-in">

          {/* DAILY REVIEW HERO */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            {dueItems.length > 0 ? (
              <button
                className="btn btn-primary"
                style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
                onClick={handleStartReview}
              >
                Start Daily Review ({dueItems.length})
              </button>
            ) : (
              <div style={{ padding: '2rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '1rem', display: 'inline-block', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                <h3 style={{ color: '#4ade80', margin: 0 }}>🎉 All Caught Up!</h3>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-muted)' }}>Great job. Explore the library to learn more.</p>
              </div>
            )}
          </div>

          {/* LIBRARY SECTION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ margin: 0 }}>Library</h2>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              style={{
                background: 'var(--bg-card)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <option value="1">Level 1: Absolute Beginner</option>
              <option value="2">Level 2: Beginner</option>
              <option value="3">Level 3: Intermediate</option>
              <option value="4">Level 4: Upper Intermediate</option>
              <option value="5">Level 5: Advanced</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {libraryItems.map(item => {
              const isLearning = !!srsData[item.id];
              return (
                <div key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem' }}>
                      {item.category}
                    </span>
                    {isLearning && <span style={{ color: '#4ade80' }}>✓ Learning</span>}
                  </div>

                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="hindi-text">{item.hindi}</div>
                  <div style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>{item.transliteration}</div>
                  <div style={{ color: 'var(--text-muted)' }}>{item.english}</div>

                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button
                      className="btn"
                      style={{ flex: 1, padding: '0.5rem', fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)' }}
                      onClick={() => speak(item.hindi)}
                    >
                      🔊
                    </button>
                    <button
                      className="btn"
                      style={{
                        flex: 2,
                        padding: '0.5rem',
                        fontSize: '0.9rem',
                        background: isLearning ? 'transparent' : 'var(--color-primary)',
                        border: isLearning ? '1px solid rgba(255,255,255,0.2)' : 'none',
                        color: isLearning ? 'var(--text-muted)' : 'white',
                        cursor: isLearning ? 'default' : 'pointer'
                      }}
                      onClick={() => !isLearning && handleAddToLearning(item.id)}
                      disabled={isLearning}
                    >
                      {isLearning ? 'Added' : '+ Add to Deck'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* REVIEW VIEW */}
      {view === 'review' && (
        <ReviewSession
          dueItems={dueItems}
          onComplete={handleReviewComplete}
          onSubmitReview={submitReview}
        />
      )}
    </div>
  );
}

export default App;
