const STORAGE_KEY = 'applications';

export const getApplications = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveApplication = (application) => {
  const apps = getApplications();
  const newApp = {
    ...application,
    id: Date.now(),
    application_date: new Date().toISOString(),
    status: 'pending'
  };
  apps.push(newApp);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  return newApp;
};

export const findApplication = (email, phone) => {
  const apps = getApplications();
  return apps.find(app => app.email === email && app.phone === phone);
};