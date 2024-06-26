import { PropsWithChildren } from 'react';
import { RealmProvider, AppProvider, UserProvider } from '@realm/react';
import { Task } from '../models/Task';
import { Lojas } from '../models/Lojas';
import AnonymousLogin from '../components/AnonymousLogin';

const appId = 'devicesyncname-owovdgv';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={AnonymousLogin}>
        <RealmProvider
          schema={[Task, Lojas]}
          sync={{
            flexible: true,
            onError: (_session, error) => {
              console.log(error);
            },
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects('Task'));
                subs.add(realm.objects('Lojas'))
              },
              rerunOnOpen: true,
            },
          }}
        >
          {children}
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
