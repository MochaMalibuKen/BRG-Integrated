'use client';

import { FormEvent, useState } from 'react';

export default function QuoteForm() {
  const [reviewed, setReviewed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReviewed(true);
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
        <p>This local preview reviews the form experience only. It does not transmit submissions.</p>
        <button className="button button-primary" type="submit">Review request <span aria-hidden="true">↗</span></button>
      </div>
      {reviewed && (
        <p className="form-status" role="status">
          Request reviewed in this preview only. No information was sent.
        </p>
      )}
    </form>
  );
}
