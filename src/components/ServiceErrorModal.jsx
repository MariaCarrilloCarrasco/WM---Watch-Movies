import React from 'react';
import { useApp } from '../context/AppContext';

export default function ServiceErrorModal() {
  const { serviceError, setServiceError, language } = useApp();

  if (!serviceError) return null;

  const isEs = language === 'es';

  return (
    <div id="service-error-modal" className="modal-overlay" style={{ display: 'flex' }}>
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '420px', 
          width: '90%', 
          background: '#0f172a', 
          padding: '28px', 
          borderRadius: 'var(--border-radius-lg)', 
          textAlign: 'center', 
          border: '2px solid #ef4444', 
          boxShadow: '0 0 25px rgba(239, 68, 68, 0.25)', 
          animation: 'modalFadeIn 0.3s ease-out' 
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
        <h3 style={{ marginTop: 0, marginBottom: '8px', fontSize: '20px', fontWeight: 800, color: '#ef4444' }}>
          {isEs ? 'Error de Servicio' : 'Service Error'}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '24px' }}>
          {serviceError.message}
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button 
            className="detail-btn detail-btn-primary" 
            style={{ background: '#ef4444', borderColor: '#ef4444', color: '#fff' }}
            onClick={() => {
              if (typeof serviceError.retryCallback === 'function') {
                serviceError.retryCallback();
              }
            }}
          >
            {isEs ? 'Reintentar' : 'Retry'}
          </button>
          <button 
            className="detail-btn" 
            style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}
            onClick={() => setServiceError(null)}
          >
            {isEs ? 'Cancelar' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
}
