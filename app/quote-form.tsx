'use client';

import { FormEvent, useState } from 'react';

export default function QuoteForm() {
  const [draft, setDraft] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = Array.from(fields.entries()).map(([key, value]) => `${key}: ${value}`).join('\n\n');
    setDraft(`mailto:brgintegratedservices@outlook.com?subject=${encodeURIComponent('BRG logistics inquiry — ' + fields.get('organization'))}&body=${encodeURIComponent(body)}`);
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Organization</span>
          <input name="organization" autoComplete="organization" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Buyer type</span>
          <select name="buyerType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Commercial</option>
            <option>Government</option>
            <option>Prime contractor</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Service need</span>
          <select name="serviceNeed" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Regional freight</option>
            <option>Dedicated delivery</option>
            <option>Last-mile delivery</option>
            <option>Scheduled route</option>
            <option>Expedited delivery</option>
            <option>Government or subcontracting opportunity</option>
          </select>
        </label>
        <label>
          <span>Timing</span>
          <input name="timing" placeholder="Requested date or schedule" required />
        </label>
        <label>
          <span>Pickup location</span>
          <input name="pickup" placeholder="City and state" required />
        </label>
        <label>
          <span>Delivery location</span>
          <input name="delivery" placeholder="City and state" required />
        </label>
      </div>
      <label className="field-wide">
        <span>Requirement details</span>
        <textarea
          name="details"
          rows={5}
          placeholder="Describe the shipment, approximate size or weight, handling needs, and whether this is recurring or one-time."
          required
        />
      </label>
      <div className="form-footer">
        <p>Prepare your request, then send it through your email app. This form does not store or submit your information. Please omit sensitive or controlled information.</p>
        <button className="button button-primary" type="submit">Prepare email request <span aria-hidden="true">↗</span></button>
      </div>
      {draft && (
        <p className="form-status" role="status">
          Your request is ready. <a className="text-link" href={draft}>Open email draft ↗</a> to review and send it. If no email app opens, email the details directly to brgintegratedservices@outlook.com. Nothing has been sent yet.
        </p>
      )}
    </form>
  );
}
