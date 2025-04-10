import React from 'react';

export default function ProfileForm() {
  return (
    <form>
      <h2>Your Profile</h2>
      <input name="name" placeholder="Name" />
      <select name="schoolType">
        <option>Public</option>
        <option>Private</option>
        <option>Charter</option>
        <option>Underfunded</option>
        <option>Elite Prep</option>
      </select>
      <input name="income" placeholder="Household Income" />
      <label>
        First-Gen?
        <input type="checkbox" name="firstGen" />
      </label>
    </form>
  );
}
